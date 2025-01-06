
import { useState } from "react";
import style from "./AddPost.module.scss";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/addPostSlice";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";
import Template from "../../Components/Template/Template";
import Input from "../../Components/Input/Input";
import Title from "../../Components/Title/Title";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import TextArea from "../../Components/TextArea/TextArea";


const AddPost = () => {
    const [formData, setFormData] = useState({
        image: null,
        text: "",
        lesson_num: "",
        title: "",
        description: "",
    });
    const navigate = useNavigate();
    const [remove, setRemove] = useState(false);
    const dispatch = useDispatch();
    const inputHandlerChange = (e: { target: { name: any; value: any; }; }) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handlerImageSelect = (imageFile: any) => {
      setFormData({ ...formData, image: imageFile });
    };
    const handlerSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      const data = new FormData();
      if (formData.image) {
        data.append("image", formData.image[0].file);
        data.append("text", formData.text);
        data.append("lesson_num", formData.lesson_num);
        data.append("title", formData.title);
        data.append("description", formData.description);
      }
      dispatch(addPost(data));
      setFormData({
        image: null,
        text: "",
        lesson_num: "",
        title: "",
        description: "",
      });
      setRemove(!remove);
    };
    return (
        <div className = {style.container}>
          <div className = {style.addPostHeader}>
            <button className = {style.button} onClick = {() => navigate('/')}>Back to Home</button>
            <Title title = {'Add Post'}/>
          </div>
          <form onSubmit={handlerSubmit} className = {style.addPostBody}>
            <Input type={"text"} title={"Title"} placeholder={"Add Title"} name = {'title'} value = {formData.title} onChange = {inputHandlerChange}/>
            <div className = {style.input}>
              <label className = {style.inputTitle}>Image</label>
              <ImageUploader onImageSelect={handlerImageSelect} remove={remove} />
            </div>
            <div className = {style.input}>
              <label className = {style.inputTitle}>Description</label>
              <textarea className = {style.textarea} title={"Description"} placeholder={"Add Description"} name = {'description'} value = {formData.description} onChange = {inputHandlerChange}/>
              
            </div>
            <TextArea type={"text"} title={"Text"} placeholder={"Add your text"} name = {'text'} value = {formData.text} onChange = {inputHandlerChange}/>
            <Input type={"number"} title={"Lesson Number"} placeholder={"0"} name = {'lesson_num'} value = {formData.lesson_num} onChange = {inputHandlerChange}/>
            <Button buttonType = {'primary'} type = {'submit'} >Add Post</Button>
          </form>
      </div>
    )
}
export default AddPost