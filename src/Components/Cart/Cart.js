import { Button, Table, Image, Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clear } from "../../Redux-TK/Slice/CartReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart);
  let totalPrice = 0;

  const itemList = items.map((item) => {
    totalPrice += item.price;
    return (
      <tr key={item.id}>
        <td>
          <Image style={{ width: "100px" }} src={item.image}></Image>
        </td>
        <td>{item.title}</td>
        <td>{item.description}</td>
        <td>{item.price}$</td>
        <td>
          <Button
            onClick={() => {
              dispatch(removeFromCart(item.id));
            }}
            variant="danger"
          >
            Remove
          </Button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <div style={{ height: "60px" }}></div>
      <div
        style={{
          width: "100%",
          padding: "10px",
          paddingRight: "10px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <p>Total price: {totalPrice.toFixed(2)}$</p>
        </div>

        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            dispatch(clear());
          }}
        >
          Clear <FontAwesomeIcon icon={faTrash} />
        </div>
      </div>
      <Table striped="columns">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{itemList}</tbody>
      </Table>
    </>
  );
}
