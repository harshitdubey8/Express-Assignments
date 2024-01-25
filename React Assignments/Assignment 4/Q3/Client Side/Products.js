import axios from "axios";
import { useState } from "react";

function Products() {
  const [prodArray, setProdsArray] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [id, setId] = useState("");

  function getDataButton_click() {
    let url = "http://localhost:3005/api/prod";
    axios.get(url).then((resData) => {
      setProdsArray(resData.data);
    });
  }

  function addProdButton_click() {
    let prodObj = {};
    prodObj.name = name;
    prodObj.price = price;
    prodObj.quantity = quantity;

    let url = "http://localhost:3005/api/prod";
    axios.post(url, prodObj).then((resData) => {
      alert(resData.data.status);
      getDataButton_click();
    });

    clearFields();
  }

  function clearFields() {
    setName("");
    setPrice("");
    setQuantity("");
  }

  function deleteDept_click(dno) {
    let flag = window.confirm("Are you sure want to delete?");
    if (flag == false) {
      return;
    }
    let url = "http://localhost:3005/api/prod/" + dno;
    axios.delete(url).then((resData) => {
      alert(resData.data.status);
      getDataButton_click();
    });
  }

  function editProductsButton(dno) {
    let tempArray = [...prodArray];
    let prodObj = tempArray.find((item) => item._id == dno);
    setName(prodObj.name);
    setPrice(prodObj.price);
    setQuantity(prodObj.quantity);
    setId(dno);
  }

  //   Update Functionality
  function updateDeptButton_click() {
    let prodObj = {};
    prodObj.name = name;
    prodObj.price = price;
    prodObj.quantity = quantity;
    let url = "http://localhost:3005/api/prod/" + id;
    axios.put(url, prodObj).then((resData) => {
      alert(resData.data.status);
      getDataButton_click();
    });
    clearFields();
  }

  let resultArray = prodArray.map((item) => {
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.quantity}</td>
        <td>
          <button onClick={() => deleteDept_click(item._id)}>delete</button>
        </td>
        <td>
          <button onClick={() => editProductsButton(item._id)}>Update</button>
        </td>
      </tr>
    );
  });

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        "padding-bottom": "15px",
        backgroundColor: "lightyellow",
      }}
    >
      <h3>MERN Stack Implementation</h3>
      <hr />

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="text"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <hr />

      <input type="button" onClick={getDataButton_click} value="Get Data" />
      <input type="button" onClick={addProdButton_click} value="Add Dept" />
      <input
        type="button"
        onClick={updateDeptButton_click}
        value="Update Dept"
      />

      <hr />

      <table border="2" cellSpacing="0" width="500">
        <tr>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Qty</th>
          <th></th>
        </tr>
        {resultArray}
      </table>
    </div>
  );
}

export default Products;
