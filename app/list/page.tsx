import React from "react";

type Props = {};

export default function List({}: Props) {
  let 상품 = ["Tomato", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="title">상품목록</h4>
      {상품.map((item, idx) => {
        return (
          <div key={idx} className="food">
            <h4>{item}</h4>
          </div>
        );
      })}
    </div>
  );
}
