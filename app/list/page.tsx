import React from "react";

type Props = {};

export default function List({}: Props) {
  return (
    <div>
      <h4 className="title">상품목록</h4>
      <div className="food">
        <h4>상품 1 $200</h4>
      </div>
      <div className="food">
        <h4>상품 2 $200</h4>
      </div>
    </div>
  );
}
