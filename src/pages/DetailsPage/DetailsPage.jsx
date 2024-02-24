import React, { useEffect, useState } from "react";
import "./DetailsPage.scss";
import "../../styles/common.scss";

import img_main from "../../img/imgMainPhoto/image 68.png";
// import { useParams } from "react-router-dom";
import save from "../../img/cartPage/save-svgrepo-com (1).svg";
import { NavLink, useParams } from "react-router-dom";
import { useDetail } from "../../context/DetailContextProvider";
import { useCart } from "../../context/CartContextProvider";
import { useLike } from "../../context/FavoritesContextProvider";

export default function DetailsPage() {
  const { getProductById, productById, likes, addFavourites } = useDetail();
  const { addProductToCart, getCart } = useCart();
  const { addProductsToLike } = useLike();
  useEffect(() => {
    getCart();
  }, []);
  const { id } = useParams();
  const likeCount = 0;
  useEffect(() => {
    getProductById(id);
  }, [id]);

  useEffect(() => {
    // getFav();
  }, []);
  console.log(likes);
  function handleFav() {
    addFavourites(likeCount);
  }
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  const buttonStyle = {
    color: "white",
    padding: "10px",
    // border: "none",
    // cursor: "pointer",
  };

  return (
    <main className="details">
      <div className="details__container">
        <h4 className="bread-crumbds-details">
          <NavLink to={"/"}>Главная</NavLink> /
          <NavLink to={"/catalog"}>Каталог</NavLink> /{" "}
          <strong>{productById.name}</strong>
        </h4>
        <div className="details__top">
          <div>
            <div className="details__imgmain">
              <img src={productById.image} alt="" />
            </div>
          </div>
          <div className="details__block2 ">
            <div className="details__997 ">
              {productById.name}
              <p className="details__vnalichii">В наличии</p>
            </div>
            <p className="details__price">{productById.price}</p>
            <div className="details__size">
              <p>Размер:</p>
              <div className="details__sizess">
                <button className="details__sizes1">{productById.size}</button>
              </div>
            </div>
            <div className="details__current">
              <button className="details__button-smole">-</button>
              <p className="details__count">1</p>
              <button className="details__button-smole">+</button>
              <button className="details__cart">В корзину</button>
              <div>
                <button style={buttonStyle} onClick={handleLikeClick}>
                  <svg
                    className="details__heart-img"
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.16 2.00017C18.1 0.937373 16.6948 0.288706 15.1984 0.171335C13.7019 0.0539653 12.2128 0.475631 11 1.36017C9.72769 0.413803 8.14402 -0.0153233 6.56795 0.159203C4.99188 0.333729 3.54047 1.09894 2.506 2.30075C1.47154 3.50256 0.930854 5.05169 0.992833 6.63618C1.05481 8.22067 1.71485 9.72283 2.84003 10.8402L9.05003 17.0602C9.57005 17.5719 10.2704 17.8588 11 17.8588C11.7296 17.8588 12.43 17.5719 12.95 17.0602L19.16 10.8402C20.3276 9.66543 20.983 8.07644 20.983 6.42017C20.983 4.76389 20.3276 3.1749 19.16 2.00017ZM17.75 9.46017L11.54 15.6702C11.4694 15.7415 11.3853 15.7982 11.2926 15.8368C11.1999 15.8755 11.1005 15.8954 11 15.8954C10.8996 15.8954 10.8002 15.8755 10.7075 15.8368C10.6148 15.7982 10.5307 15.7415 10.46 15.6702L4.25003 9.43017C3.46579 8.62851 3.02664 7.55163 3.02664 6.43017C3.02664 5.3087 3.46579 4.23182 4.25003 3.43017C5.04919 2.64115 6.127 2.19873 7.25003 2.19873C8.37306 2.19873 9.45088 2.64115 10.25 3.43017C10.343 3.52389 10.4536 3.59829 10.5755 3.64906C10.6973 3.69983 10.828 3.72596 10.96 3.72596C11.092 3.72596 11.2227 3.69983 11.3446 3.64906C11.4665 3.59829 11.5771 3.52389 11.67 3.43017C12.4692 2.64115 13.547 2.19873 14.67 2.19873C15.7931 2.19873 16.8709 2.64115 17.67 3.43017C18.4651 4.22132 18.9186 5.29236 18.9336 6.41385C18.9485 7.53535 18.5237 8.6181 17.75 9.43017V9.46017Z"
                      fill={liked ? `red` : "black"}
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="details__block3">
          <div className="details__title">
            <p className="details__name">Описание</p>
            <p className="details__name-descr">{productById.descr}</p>
          </div>
        </div>
        <div className="details__block4">
          <div className="details__title2">Характеристика</div>
          <div className="blockk">
            <ul className="block__list">
              <li className="block__item">Цвет</li>
              <li className="block__item">Бренд</li>
              <li className="block__item">Материал рамы</li>
              <li className="block__item">Размер</li>
              <li className="block__item">Страна</li>
            </ul>
            <ul className="block__list">
              <li className="block__item2">{productById.color}</li>
              <li className="block__item2">{productById.brand}</li>
              <li className="block__item2">{productById.frame}</li>
              <li className="block__item2">{productById.size}</li>
              <li className="block__item2">{productById.country}</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
