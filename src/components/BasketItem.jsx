import { useContext } from "react";
import { BookContext } from "../context";
import Types from "prop-types";

export const BasketItem = ({ id, price, count, title }) => {
  const { dispatch } = useContext(BookContext);
  const subtotal = price * count;

  return (
    <tr>
      <td>{title}</td>
      <td>{price}</td>
      <td>{count}</td>
      <td>{subtotal}</td>
      <td>
        <button onClick={() => dispatch({ type: "INCREMENT", payload: id })}>
          +
        </button>
        <button onClick={() => dispatch({ type: "DECREMENT", payload: id })}>
          -
        </button>
        <button onClick={() => dispatch({ type: "REMOVE", payload: id })}>
          REMOVE
        </button>
      </td>
    </tr>
  );
};

BasketItem.propTypes = {
  id: Types.number,
  title: Types.string,
  price: Types.number,
  count: Types.number,
};
