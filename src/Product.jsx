import { useState, useEffect } from "react";

export default function Product(props) {
  const { productInfo, qty } = props;

  return (
    <div>
      {productInfo.name} and {qty}
    </div>
  );
}
