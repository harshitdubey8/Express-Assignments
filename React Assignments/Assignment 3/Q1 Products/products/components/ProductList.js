import React, { useState } from "react";
import "./ProductList.css";

function ProductList(props) {
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 999.99,
      stock: 50,
    },
    {
      id: 2,
      name: "Smartphone",
      category: "Electronics",
      price: 399.99,
      stock: 100,
    },
    {
      id: 3,
      name: "Coffee Maker",
      category: "Appliances",
      price: 49.99,
      stock: 25,
    },
    {
      id: 4,
      name: "Running Shoes",
      category: "Clothing",
      price: 79.99,
      stock: 75,
    },
    {
      id: 5,
      name: "Backpack",
      category: "Accessories",
      price: 29.99,
      stock: 30,
    },
  ];

  const [productsArray, setProductsArray] = useState(products);

  let filteredArray = products.filter(
    (item) => item.category === props.category
  );
  console.log(filteredArray);
  return (
    <div>
      <h2>List will be displayed Here</h2>

      {filteredArray.map((item) => (
        <div className="productCard">
          <p>{item.name}</p>
          <p>{item.category}</p>
          <p>{item.price}</p>
          <p>{item.stock}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
