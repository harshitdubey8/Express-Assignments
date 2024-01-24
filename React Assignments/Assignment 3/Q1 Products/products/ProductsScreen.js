import React, { useState } from "react";
import ProductList from "./components/ProductList";
import "./ProductsScreen.css";

function ProductsScreen() {
  const [category, setCategory] = useState("");

  return (
    <div className="ProductsScreen">
      <h3>Select the Category</h3>
      <div className="Input">
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Appliances">Appliances</option>
          <option value="Clothing">Clothing</option>
        </select>
      </div>

      <div>
        <ProductList category={category} />
      </div>
    </div>
  );
}

export default ProductsScreen;
