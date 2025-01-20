import AllPosts from "../../../Pages/AllPosts/AllPosts"
import FavoritePosts from "../../../Pages/FavoritePosts/FavoritePosts";

const TabContent = ({selectedTab}: {selectedTab: number}) => {
    const tabsContent: any[] = [
        <AllPosts/>,
        <FavoritePosts/>
    ];
    return <>{tabsContent[selectedTab]}</>;
};
export default TabContent;