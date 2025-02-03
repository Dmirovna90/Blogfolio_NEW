import { useNavigate } from "react-router-dom";
import style from "./CardPostMiddle.module.scss";
import { ReactComponent as Up } from "../../../assets/up.svg";
import { ReactComponent as Down } from "../../../assets/down.svg";
import { ReactComponent as Bookmark } from "../../../assets/bookmark.svg";
import { ReactComponent as More } from "../../../assets/more.svg";
import PopUp from "../../PopUp/PopUp";
import {  useState } from "react";
import { useDispatch } from "react-redux";
import { getFavorite } from "../../../store/postsSlice";
import { IPost } from "../../../types";

interface ICard {
  item: IPost;
}

const CardPostMiddle = ({ item }: ICard) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [popUpActive, setPopUpActive] = useState(false);
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.wrapimg} onClick={() => setPopUpActive(true)}>
          <img className={style.imgCard} src={item.image}></img>
        </div>
        <div className={style.wraptextcontent}>
          <p className={style.date}>{item.date}</p>
          <h2 className={style.title} onClick={() => navigate(`/${item.id}`)}>
            {item.title}
          </h2>
        </div>
        <div className={style.wrap}>
          <div className={style.icons}>
            <Up className={style.icon} />
            <Down />
          </div>
          <div className={style.icons}>
            <button
              className={style.iconBtn}
              type="button"
              onClick={() => {
                dispatch(getFavorite(item));
              }}
            >
              <Bookmark className={style.icon} />
            </button>
            <button className={style.iconBtn}>
              <More />
            </button>
          </div>
        </div>
      </div>
      <PopUp open={popUpActive} setOpen={setPopUpActive}>
        <div className={style.popup_wraping}>
          <img className={style.imgCard} src={item.image}></img>
        </div>
      </PopUp>
    </>
  );
};
export default CardPostMiddle;
