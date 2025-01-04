import AllPosts from "../../../Pages/AllPosts/AllPosts"
import SearchResults from "../../../Pages/SearchResults/SearchResults";

const TabContent = ({selectedTab}: {selectedTab: number}) => {
    const tabsContent: any[] = [
        <AllPosts/>
        // '2Excepturi a facilis ducimus commodi modi eius facere voluptates voluptatum eaque dolor quaerat ',
        // '3voluptate autem, officia tempore maxime cum, error nam odio!'
    ];
    return <>{tabsContent[selectedTab]}</>;
};
export default TabContent;