import style from './PopUp.module.scss';
import {ReactComponent as Close} from '../../assets/closePopUp.svg';
const PopUp = ({open, setOpen, children} : any) => {
    return <div className = {open ? `${style.popup_active}` : `${style.popup}`} onClick={() => setOpen(false)}>
        <div className = {style.popup_content}>
            <div className = {style.close}><button className = {style.btn} onClick={() => setOpen(false)}><Close className = {style.icon} /></button></div>
            <div className = {style.children}>{children}</div>
        </div>
    </div>
}
export default PopUp