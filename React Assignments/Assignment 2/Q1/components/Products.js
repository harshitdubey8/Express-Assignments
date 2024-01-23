import React, { useState } from "react";
import "./products.css";

function Products() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [result, setResult] = useState("");

  const onButtonClick = () => {
    setResult(price * quantity);
  };

  return (
    <div className="products">
      <h2>Enter Product data to find out the results</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={onButtonClick}>Get Total Amt</button>

      {result.length != 0 ? (
        <h2>
          {" "}
          This total of Amt of {name}is {result}
        </h2>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Products;
