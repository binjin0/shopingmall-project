// import { recoilPersist } from "recoil-persist";
// import { productListState } from "./Recoil"; // 이곳에 사용 중인 Recoil Atom을 import
// import PropTypes from "prop-types";
// const { RecoilPersist, updateState } = recoilPersist();
// RecoilPersistWrapper.propTypes = {
//   children: PropTypes.node.isRequired,
// };
// export const RecoilPersistWrapper = ({ children }) => {
//   return (
//     <RecoilPersist
//       key="recoil-persist"
//       states={[productListState]} // 지속시킬 Recoil Atom 목록
//       onBeforeWrite={({ atomValues }) => {
//         // 필요한 경우, 데이터를 변환하거나 업데이트할 수 있음
//         const updatedValues = { ...atomValues };
//         updateState(updatedValues);
//       }}
//     >
//       {children}
//     </RecoilPersist>
//   );
// };

import React from "react";
import PropTypes from "prop-types";
import { RecoilPersist, updateState } from "recoil-persist";
import { productListState } from "./Recoil"; // 사용 중인 Recoil Atom을 import
import { cartState } from "./Recoil";
const RecoilPersistWrapper = ({ children }) => {
  return (
    <RecoilPersist
      key="recoil-persist"
      states={([productListState], [cartState])} // 지속시킬 Recoil Atom 목록
      onBeforeWrite={({ atomValues }) => {
        // 필요한 경우, 데이터를 변환하거나 업데이트할 수 있음
        const updatedValues = { ...atomValues };
        updateState(updatedValues);
      }}
    >
      {children}
    </RecoilPersist>
  );
};
RecoilPersistWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
export default RecoilPersistWrapper;
