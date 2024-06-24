import { BasketItem } from "./BasketItem";
import { useContext } from "react";
import { BookContext } from "../context";

export const Basket = () => {
  const {
    state: { basket, basket_total },
  } = useContext(BookContext);

  return (
    <div>
      <h3>Basket</h3>
      <h3>Total {basket_total}</h3>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Count</th>
            <th>Subtotal</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((elm) => (
            <BasketItem key={elm.id} {...elm} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
