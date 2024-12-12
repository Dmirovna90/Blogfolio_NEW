const TabContent = ({selectedTab}: {selectedTab: number}) => {
    const tabsContent: string[] = [
        // '1Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        // '2Excepturi a facilis ducimus commodi modi eius facere voluptates voluptatum eaque dolor quaerat ',
        // '3voluptate autem, officia tempore maxime cum, error nam odio!'
    ];
    return <p>{tabsContent[selectedTab]}</p>;
};
export default TabContent;