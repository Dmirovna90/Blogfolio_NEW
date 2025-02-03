import CardPostMiddle from "../../Components/CardPost/CardPostMiddle/CardPostMiddle";
import style from "./FavoritePosts.module.scss";
import { useSelector } from "react-redux";
import { IPost } from "../../types";

const FavoritePosts = () => {
  const { favoritePosts, loading, error } = useSelector(
    (favorite: any) => favorite.posts
  );
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  return (
    <div className={style.postsWrap}>
      {favoritePosts.map((favorite: IPost) => {
        return (
          <div key={favorite.id}>
            <CardPostMiddle item={favorite} />
          </div>
        );
      })}
    </div>
  );
};
export default FavoritePosts;
