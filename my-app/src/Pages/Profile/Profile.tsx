import { useDispatch, useSelector } from "react-redux";
import style from "./Profile.module.scss";
import { useEffect } from "react";
import { getUserInfo } from "../../store/userMeSlice";
import Template from "../../Components/Template/Template";
import { useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";

const Profile = () => {
  const { auth } = useSelector((state) => state.signIn);
  const { UserInfo, loading, error } = useSelector((state) => state.userMe);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth) dispatch(getUserInfo());
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <Template title={"Your profile"}>
        <div>
            <p className = {style.text}>Name: <span className = {style.personalInfo}>{UserInfo.username}</span></p>
            <p className = {style.text}>Email: <span className = {style.personalInfo}>{UserInfo.email}</span></p>            
        </div>
        <Button buttonType = {'primary'} type = {'button'} click = {() => navigate('/my-posts')}>Back to My Posts</Button>      
    </Template>
  );
};
export default Profile;
