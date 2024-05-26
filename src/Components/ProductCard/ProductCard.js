import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSelector, useDispatch } from "react-redux";
import { getAllProductsAPI } from "../../APIs/getAllProductsAPI";
import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../../Redux-TK/Slice/CartReducer";


export default function ProductCard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProductsAPI());
  }, []);

  const productList = products.map((product) => {
    return (
      <Card
        key={product.id}
        className="my-2 mx-2"
        style={{ width: "25rem", backgroundColor: "#282a36", color: "white" }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Card.Img
            variant="top"
            style={{
              width: "250px",
              height: "350px",
              borderRadius: "20px",
              marginTop: "10px",
            }}
            src={product.image}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>{product.description.slice(0, 100)}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{product.price}$</ListGroup.Item>
          <ListGroup.Item style={{ marginBottom: "10px" }}>
            {product.rating.rate} <FontAwesomeIcon icon={faHeart} color="red" />
          </ListGroup.Item>
        </ListGroup>
        <Button
          onClick={() => {
            dispatch(addToCart(product));
          }}
          style={{ marginBottom: "10px" }}
        >
          Add to Cart <FontAwesomeIcon icon={faCartShopping} />
        </Button>
      </Card>
    );
  });

  return (
    <Col>
      <Row style={{ justifyContent: "center" }} className="px-3">
        <div style={{ height: "70px" }}></div>
        {productList}
      </Row>
    </Col>
  );
}
