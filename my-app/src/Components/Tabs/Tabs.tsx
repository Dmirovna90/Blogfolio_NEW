import { useState } from "react";
import TabsList from "./TabsList/TabsList";
import TabContent from "./TabContent/TabContent";

// const Tabs = () => {
//     const [show, setShow] = useState(false);
//     return <div>
//         <button onClick={() => setShow(!show)}>Занятие</button>
//         {show ? (
//             <p>
//                 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi a facilis ducimus commodi modi eius facere voluptates voluptatum eaque dolor quaerat voluptate autem, officia tempore maxime cum, error nam odio!
//             </p>
//         ) : (
//             ''
//         )}
//     </div>
// };

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