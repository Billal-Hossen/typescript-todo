import React, { ChangeEvent, useReducer, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Iproduct } from "./Interfaces";
// Action type
export type ActionType = { type: "ADD" } | { type: "REMOVE"; id: number };
const ProductList = () => {
  const [pName, setPName] = useState<string>("");
  const [pPrice, setPPrice] = useState<number>(0);
  const [pQuantity, setQuantity] = useState<number>(0);
  const [products, setProducts] = useState<Iproduct[]>([]);
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "name") {
      setPName(e.target.value);
      //   console.log(pName);
    } else if (e.target.name === "price") {
      setPPrice(Number(e.target.value));
      //   console.log(pPrice);
    } else {
      setQuantity(Number(e.target.value));
      //   console.log(pQuantity);
    }
  };
  // const handleSubmit = (): void => {
  //   const newData = { name: pName, price: pPrice, quantity: pQuantity };
  //   if (newData.name && newData.price && newData.quantity) {
  //     setProducts([...products, newData]);
  //   }
  //   console.log(products);
  // };
  // enum ActionType {
  //   ADD = "ADD",
  //   REMOVE=  "REMOVE"
  // }
  // interface Action{
  //   type:ActionType,
  //   payload:object
  // }
  const reducer = (state: Iproduct[], action: ActionType) => {
    switch (action.type) {
      case "ADD":
        const newData = { name: pName, price: pPrice, quantity: pQuantity };
        console.log("Hello");
        // console.log(pName);
        // console.log(pPrice);
        // console.log(pQuantity);
        // console.log(newData);
        console.log(state);
        return [
          ...state,
          {
            id: state.length,
            name: pName,
            price: pPrice,
            quantity: pQuantity,
          },
        ];
      case "REMOVE":
        return state.filter((pd) => pd.id !== action.id);

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, products);
  // console.log(products);
  return (
    <>
      <div className="container">
        <h1>Add Product</h1>
        <form className="w-50 mt-5">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Product Name"
              name="name"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product price</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product price"
              name="price"
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Quantity</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter Product Quantity"
              name="quantity"
              onChange={handleChange}
            />
          </Form.Group>
          <Button onClick={() => dispatch({ type: "ADD" })}>Submit</Button>
        </form>
      </div>
      {state.length &&
        state.map((pd) => (
          <div className="container mt-5">
            <div className="card bg-light p-3 mb-3 d-flex justify-content-between">
              <div>
                <h3>Product Name: {pd.name} </h3>
                <p>Product Price: ${pd.price}</p>
                <p>Product Quantity: {pd.quantity}</p>
              </div>
              <Button onClick={() => dispatch({ type: "REMOVE", id: pd.id })}>
                Remove
              </Button>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductList;
