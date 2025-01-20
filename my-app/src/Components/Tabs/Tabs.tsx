import { useState } from "react";
import TabsList from "./TabsList/TabsList";
import TabContent from "./TabContent/TabContent";

const Tabs = () => {
    const [showTab, setShowTab] = useState(0);
    const handler = (index: number) => {
        setShowTab(index);
    }
    return (
        <div>
         <TabsList selectedTab = {showTab} setShowTab = {handler}/>
         <TabContent selectedTab = {showTab}/>
        </div>
    );
};
export default Tabs;