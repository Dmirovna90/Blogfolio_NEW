import { useDispatch, useSelector } from "react-redux";
import style from "./User.module.scss";
import { ReactComponent as Profile } from "../../assets/profile.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { getUserInfo } from "../../store/userMeSlice";

const User = () => {
  const { auth } = useSelector((state) => state.signIn);
  const { username } = useSelector((state) => state.userMe.UserInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (auth) dispatch(getUserInfo());
  }, [auth]);

  const initials = useMemo(() => {
    return username
      .split(" ")
      .map((item) => {
        return item[0];
      })
      .join("");
  }, [username]);
  return (
    <div className={style.userwrap}>
      <div className={style.initials}>
        <span>{initials}</span>
      </div>
      <div className={style.username}>
        <span>{username}</span>
      </div>
    </div>
  );
};
export default User;
