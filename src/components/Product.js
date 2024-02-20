import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import  Alert  from "react-bootstrap/Alert";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";
import StatusCode from "../utils/StatusCode";

const Product = () => {

  const { data: products,status } = useSelector(state => state.products);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // dispatch action for fetching
    dispatch(getProducts());
    // fetch("https://fakestoreapi.com/products")
    //   .then((data) => data.json())
    //   .then((result) => getProducts(result));
    // eslint-disable-next-line
  }, []);

if(status=== StatusCode.LOADING){
  return <p>loading...</p>
}
if(status===StatusCode.ERROR){
  return <Alert key="danger" variant="danger">Something went wrong!!!</Alert>
}
  const addToCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => (
    <div key={product.id} className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card className="h-100">
        <div className="text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            USD {product.price}
          
            {product.description.slice(0, 45)}...
          </Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Card
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h2>ProductS</h2>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
