import style from './TabList.module.scss';

const TabsList = ({
    selectedTab,
    setShowTab,
}: {
    selectedTab: number;
    setShowTab: (index: number) => void;
}) => {
    console.log('active tab', selectedTab);
    const tabs: string[] = ['All', 'My favorites', 'Popular'];
    const tabsMarkup = tabs.map((el, index) => (
        <button className = {selectedTab === index ? style.active : style.tab} key = {index} onClick={() => setShowTab(index)}>
            {el}
            </button>
    ));
    return (
        <div className = {style.tabs}>
            {tabsMarkup}
        </div>
    )
};
export default TabsList;