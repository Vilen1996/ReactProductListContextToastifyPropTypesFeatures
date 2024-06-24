import React from "react";
import { toast } from "react-toastify";

export const BookContext = React.createContext();

export const initialState = {
  books: [
    {
      id: 101,
      title: "Psychology",
      price: 40,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9780744098556/9780744098556_cover.jpg",
    },
    {
      id: 102,
      title: "The Economics Book",
      price: 50,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9780756698270/9780756698270_cover.jpg",
    },
    {
      id: 103,
      title: "The Politics Book",
      price: 60,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9780593844120/9780593844120_cover.jpg",
    },
    {
      id: 104,
      title: "The Religions Book",
      price: 70,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9781465408433/9781465408433_cover.jpg",
    },
    {
      id: 105,
      title: "The Business Book",
      price: 80,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9781465415851/9781465415851_cover.jpg",
    },
    {
      id: 106,
      title: "The Science Book",
      price: 90,
      photo:
        "https://res.cloudinary.com/dk-hub/image/upload/c_limit,f_auto,w_580,h_650/dk-core-nonprod/9781465419651/9781465419651_cover.jpg",
    },
  ],
  basket: [],
  basket_total: 0,
};

export const reducer = (state, action) => {
  function calculateBasketTotal(basket) {
    return basket.reduce((total, item) => total + item.price * item.count, 0);
  }

  switch (action.type) {
    case "ADD_TO_BASKET": {
      const book = state.books.find((x) => x.id === action.payload);
      const existingBookIndex = state.basket.findIndex(
        (x) => x.id === action.payload
      );

      let updatedBasket;
      if (existingBookIndex >= 0) {
        updatedBasket = state.basket.map((x, index) =>
          index === existingBookIndex ? { ...x, count: x.count + 1 } : x
        );
      } else {
        updatedBasket = [...state.basket, { ...book, count: 1 }];
      }
      toast.success("Successfully Added");
      return {
        ...state,
        basket: updatedBasket,
        basket_total: calculateBasketTotal(updatedBasket),
      };
    }

    case "INCREMENT": {
      const updatedBasket = state.basket.map((x) =>
        x.id === action.payload ? { ...x, count: x.count + 1 } : x
      );

      return {
        ...state,
        basket: updatedBasket,
        basket_total: calculateBasketTotal(updatedBasket),
      };
    }

    case "DECREMENT": {
      const updatedBasket = state.basket.map((x) =>
        x.id === action.payload && x.count > 1
          ? { ...x, count: x.count - 1 }
          : x
      );

      return {
        ...state,
        basket: updatedBasket,
        basket_total: calculateBasketTotal(updatedBasket),
      };
    }
    case "REMOVE": {
      const updatedBasket = state.basket.filter((x) => x.id !== action.payload);
      toast.success("Successfully Removed");
      return {
        ...state,
        basket: updatedBasket,
        basket_total: calculateBasketTotal(updatedBasket),
      };
    }
    default:
      return state;
  }
};
