import { useDispatch, useSelector } from 'react-redux';
import {ReactComponent as Cancel} from '../../assets/cancelIcon.svg';
import { searchActive } from '../../store/searchSlice';
import style from './SearchInput.module.scss';
interface IProps {
    placeholder?: string,
    type: string,
    name?: string,
    value?: string,
    onChange?: any,
}
const SearchInput = ({type = 'text', placeholder = "Search...", name, value, onChange}: IProps) => {
    const dispatch = useDispatch();
    const {isActive} = useSelector((state) => state.search);
    return (
    <div className={!isActive ? style.search : `${style.search} ${style.active}`}>
        <input
            className = {style.inputField}
            type = {type}
            placeholder = {placeholder}
            name = {name}
            value = {value}
            onChange = {onChange}
        ></input>
        <button className = {style.cancelButton} onClick={() => dispatch(searchActive())}>
            <Cancel className = {style.cancel}/>
        </button>
    </div>
    )
}
export default SearchInput