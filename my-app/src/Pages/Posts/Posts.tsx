import Tabs from '../../Components/Tabs/Tabs';
import Title from '../../Components/Title/Title';
import style from './Posts.module.scss';
const Posts = () => {
    return (
        <div className = {style.container}>
            <Title title = 'Blog' />
            <Tabs/>
        </div>
    )
}
export default Posts