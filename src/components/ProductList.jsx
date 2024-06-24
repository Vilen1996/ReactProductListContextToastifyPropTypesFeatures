import { useContext } from "react";
import { BookContext } from "../context";
import { ProductItem } from "./ProductItem";

export const ProductList = () => {
  const {
    state: { books },
  } = useContext(BookContext);

  return (
    <div>
      <h3>ProductList</h3>
      <div className="list">
        {books.map((elm) => (
          <ProductItem key={elm.id} {...elm} />
        ))}
      </div>
    </div>
  );
};
