import { useContext } from "react";
import { BookContext } from "../context";
import Types from "prop-types";

export const ProductItem = ({ title, id, price, photo }) => {
  const { dispatch } = useContext(BookContext);
  return (
    <div>
      <img src={photo} alt="" />
      <p>{title}</p>
      <p>{price} AMD</p>
      <button onClick={() => dispatch({ type: "ADD_TO_BASKET", payload: id })}>
        ADD
      </button>
    </div>
  );
};

ProductItem.propTypes = {
  title: Types.string,
  id: Types.number,
  price: Types.number,
  photo: Types.string,
};
