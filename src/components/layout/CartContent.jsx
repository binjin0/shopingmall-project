import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { cartState } from "../../recoil/Recoil";
import { Link } from "react-router-dom";
import EmptyCart from "./EmptyCart";
const CartContent = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [showConfirmation, setShowConfirmation] = useState(false);
  // const addToCart = (product) => {
  //   const existingProductIndex = cart.findIndex(
  //     (item) => item.id === product.id
  //   );

  //   if (existingProductIndex !== -1) {
  //     const updatedCart = [...cart];
  //     updatedCart[existingProductIndex].quantity += 1;
  //     setCart(updatedCart);
  //   } else {
  //     setCart([...cart, { ...product, quantity: 1 }]);
  //   }
  // };
  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // 이미 장바구니에 있는 제품이라면 수량만 증가
      const updatedCart = [...cart];
      updatedCart[existingProductIndex] = {
        ...updatedCart[existingProductIndex],
        quantity: updatedCart[existingProductIndex].quantity + 1,
      };
      setCart(updatedCart);
    } else {
      // 장바구니에 없는 제품이라면 새로 추가
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };
  const handleConfirmation = (confirm) => {
    if (confirm) {
      setCart([]);
    }
    setShowConfirmation(false);
  };
  const clearCart = () => {
    const confirmClear = window.confirm("정말로 장바구니를 비우시겠습니까?");
    if (confirmClear) {
      setCart([]);
    }
  };
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index] = {
      ...updatedCart[index],
      quantity: updatedCart[index].quantity + 1,
    };
    setCart(updatedCart);
  };

  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      // Quantity가 1보다 큰 경우에만 감소
      updatedCart[index] = {
        ...updatedCart[index],
        quantity: updatedCart[index].quantity - 1,
      };
    } else {
      // Quantity가 1 이하이면 상품 삭제
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };
  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>홈</li>
          <li>장바구니</li>
        </ul>
      </div>
      {cart.length === 0 ? (
        <div className="mt-6 text-left md:mt-14 px-2 lg:px-0">
          <EmptyCart />
          <div className="lg:flex justify-between mb-20">
            <div></div>
            <div className="self-start shrink-0 flex items-center mt-10 mb-20">
              <span className="text-xl md:text-2xl">총</span>
              <label
                htmlFor="confirm-modal"
                className="modal-button btn btn-primary ml-5"
                onClick={clearCart}
              >
                구매하기
              </label>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6 md:mt-14 px-2 lg:px-0">
          <div className="lg:flex justify-between mb-20">
            <div>
              <div className="lg:flex lg:items-center mt-4 px-2 lg:px-0">
                {cart.map((item, index) => (
                  <div key={index}>
                    <Link to={`/product/${item.id}`}>
                      <figure className="w-56 min-w-full flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="object-contain w-full h-48"
                        />
                      </figure>
                    </Link>
                    <div className="text-left card-body px-1 lg:px-12">
                      <h2 className="card-title">
                        <Link
                          to={`/product/${item.id}`}
                          className="link link-hover"
                        >
                          {item.title}
                        </Link>
                      </h2>
                      <p className="mt-2 mb-4 text-3xl">${item.price}</p>
                      <div className="card-actions">
                        <div className="btn-group">
                          <button
                            className="btn btn-primary"
                            onClick={() => decreaseQuantity(index)}
                          >
                            -
                          </button>
                          <button className="btn btn-ghost no-animation">
                            {item.quantity}
                          </button>
                          <button
                            className="btn btn-primary"
                            onClick={() => increaseQuantity(index)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:flex justify-between mb-20">
              <div className="self-start shrink-0 flex items-center mt-10 mb-20">
                <span className="text-xl md:text-2xl">총</span>
                <label
                  htmlFor="confirm-modal"
                  className="modal-button btn btn-primary ml-5"
                  onClick={clearCart}
                >
                  구매하기
                </label>
              </div>
            </div>
          </div>
        </div>
      )}

      {showConfirmation && (
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
            <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
            <label
              htmlFor="confirm-modal"
              className="btn btn-primary"
              data-cart="[object Object]"
              onClick={() => handleConfirmation(true)}
            >
              네
            </label>
            <label
              htmlFor="confirm-modal"
              className="btn btn-primary"
              data-cart="[object Object]"
              onClick={() => handleConfirmation(false)}
            >
              아니요
            </label>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartContent;
