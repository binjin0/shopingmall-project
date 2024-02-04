import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { productListState } from "../../recoil/Recoil";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { cartState } from "../../recoil/Recoil";
import CartContent from "../layout/CartContent";
const DetailCard = () => {
  const { id } = useParams();
  console.log(id);
  const [productList, setProductList] = useRecoilState(productListState);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const result = await res.json();

        setProductList(result.find((product) => product.id === parseInt(id)));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, [id, setProductList]);

  const getCategoryText = (category) => {
    if (category && category.toLowerCase().includes("clothing")) {
      return "패션";
    } else if (category === "jewelery") {
      return "액세사리";
    } else if (category === "electronics") {
      return "디지털";
    } else {
      return "기타 카테고리";
    }
  };
  const rate = productList.rating?.rate || 0;
  const count = productList.rating?.count || 0;
  // console.log(productList);
  const renderStars = () => {
    const filledStars = Math.floor(rate); // 채워진 별의 개수
    const hasHalfStar = rate % 1 !== 0; // 반 개의 별 여부

    const starElements = Array.from({ length: 5 }, (_, index) => {
      if (index < filledStars) {
        return (
          <span key={index} className="text-yellow-400">
            &#9733;
          </span>
        ); // 채워진 별
      } else if (index === filledStars && hasHalfStar) {
        return (
          <span key={index} className="text-yellow-400">
            &#9732;
          </span>
        ); // 반 개의 별
      } else {
        return (
          <span key={index} className="text-yellow-400">
            &#9734;
          </span>
        ); // 빈 별
      }
    });

    return (
      <div className="flex items-center mt-3">
        {starElements}
        <div className="ml-2">
          {rate.toFixed(1)} / {count} 참여
        </div>
      </div>
    );
  };

  const [cart, setCart] = useRecoilState(cartState);

  const addToCart = () => {
    setCart([...cart, { ...productList, quantity: 1 }]);
  };

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>{getCategoryText(productList.category)}</li>
          <li>{productList.title}</li>
        </ul>
      </div>
      <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
        <figure className="flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image">
          <img
            src={productList.image}
            alt={productList.title}
            className="object-contain w-full h-72"
          />
        </figure>
        <div className="card-body px-1 lg:px-12">
          <h2 className="card-title text-left">
            {productList.title}
            <span className="badge badge-accent ml-2">NEW</span>
          </h2>
          <p className="text-left">{productList.description}</p>
          <div className="flex items-center mt-3">
            {/* <div className="rating rating-half">
              <input
                type="radio"
                name="rating-10"
                className="bg-yellow-400 cursor-default mask mask-star-2 mask-half-1"
                disabled
                checked
              />
            </div> */}
            {renderStars()}
            {/* <div className="ml-2">
              {rate} / {count} 참여
            </div> */}
          </div>
          <p className="mt-2 mb-4 text-3xl text-left">${productList.price}</p>
          <div className="card-actions">
            <button className="btn btn-primary" onClick={addToCart}>
              장바구니에 담기
            </button>
            <Link to="/Cart" className="btn btn-outline ml-1">
              장바구니로 이동
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCard;
