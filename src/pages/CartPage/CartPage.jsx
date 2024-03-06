import "./CartPage.scss";
import React, { useEffect } from "react";
import deleteimg from "../../img/cartPage/trash-alt-svgrepo-com.svg";
import { useCart } from "../../context/CartContextProvider";
import { NavLink } from "react-router-dom";

const CartPage = () => {
  const { cart, getCart, changeProductCount, deleteProductFromCart } =
    useCart();

  useEffect(() => {
    getCart();
  }, []);
  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };
  return (
    <>
      <div className="cart">
        <div className="cart__container">
          <h4 className="bread-crumbds-details">
            <NavLink to={"/"}>Главная</NavLink> /
            <NavLink to={"/catalog"}>Каталог</NavLink> /<strong>Корзина</strong>
          </h4>
          <div className="cart__title">Корзина</div>
          <div className="cart__cont-one">
            <div className="cart__block-one-left">
              <div className="cart__display title">
                <NavLink to={"/catalog"} className="cart__back-to-shopping">
                  Вернуться к покупкам
                </NavLink>
                <button
                  onClick={cartCleaner}
                  className="cart__empty-trash"
                  href="#"
                >
                  Oчистить корзину
                </button>
              </div>
              {cart.products.map((elem) => (
                <div className="cart__blk-one" key={elem.item.id}>
                  <img className="cart__img" src={elem.item.image} alt="" />
                  <p className="cart__descr">{elem.item.name}</p>
                  <div className="cart__count">
                    <div className="cart__btn-caunt">
                      <input
                        type="number"
                        value={elem.count}
                        onChange={(e) =>
                          changeProductCount(elem.item.id, e.target.value)
                        }
                        defaultValue={elem.count}
                        max={20}
                        min={1}
                      />
                    </div>
                  </div>
                  <div className="cart__price">
                    <p>{elem.subPrice}</p>
                  </div>
                  <img
                    onClick={() => deleteProductFromCart(elem.item.id)}
                    className="cart__img-delete"
                    src={deleteimg}
                    alt=""
                  />
                </div>
              ))}
            </div>

            <div className="cart__one">
              <div className="cart__top">
                <div className="cart__block">
                  <div className="cart__desc">
                    <p className="cart__word">
                      Сумма заказа <br /> (без скидки)
                    </p>
                    <div className="cart__prices">
                      <p>{cart.totalPrice} ₽</p>
                    </div>
                  </div>
                  <div className="cart__desc">
                    <p className="cart__words">Скидка</p>
                    <div className="cart__price">
                      <p>{cart.totalPrice / 2} ₽</p>
                    </div>
                  </div>
                </div>
                <div className="cart__total-price">
                  <p className="cart__totalword">Итого</p>
                  <p className="cart__totalsum">{cart.totalPrice}₽</p>
                </div>
              </div>
              <div className="cart__bottom">
                <NavLink className="cart__btn" to={"/payment"}>
                  Оформить заказ
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
