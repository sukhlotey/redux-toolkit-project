import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from '../store/cartSlice';
const Cart = () => {
  const productCart = useSelector(state=>state.cart)

  const dispatch = useDispatch();
const removeItem = (id) =>{
      dispatch(remove(id))
}
  const cards = productCart.map((product) => (
    <div key={product.id} className="col-md-12" style={{ marginBottom: "10px" }}>
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
          <Button variant="danger" onClick={()=>removeItem(product.id)}>Remove</Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div className='row'>
            {cards}
    </div>
  );
}

export default Cart;
