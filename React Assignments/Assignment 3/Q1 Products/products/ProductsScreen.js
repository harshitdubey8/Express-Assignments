import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./ProductsScreen.css";

function ProductsScreen() {
  const [category, setCategory] = useState("");

  return (
    <div className="ProductsScreen">
      <h3>Search for the category to see the products</h3>
      <div className="Input">
        <input
          type="text"
          value={category}
          placeholder="Enter category"
          onChange={(e) => setCategory(e.target.value)}
        />
      </div>

      <div>
        <ProductList category={category} />
      </div>
    </div>
  );
}

export default ProductsScreen;
