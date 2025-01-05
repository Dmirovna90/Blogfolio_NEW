
import { useState } from "react";
import style from "./AddPost.module.scss";
import { useDispatch } from "react-redux";
import { addPost } from "../../store/addPostSlice";
import ImageUploader from "../../Components/ImageUploader/ImageUploader";


const AddPost = () => {
    const [formData, setFormData] = useState({
        image: null,
        text: "",
        lesson_num: "",
        title: "",
        description: "",
    });
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
        <div>
        <form onSubmit={handlerSubmit}>
          <div>
            <label>Image</label>
            <ImageUploader onImageSelect={handlerImageSelect} remove={remove} />
          </div>
          <div>
            <label>Text</label>
            <input
              type="text"
              name="text"
              value={formData.text}
              onChange={inputHandlerChange}
            />
          </div>
          <div>
            <label>Lesson Num</label>
            <input
              type="number"
              name="lesson_num"
              value={formData.lesson_num}
              onChange={inputHandlerChange}
            />
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={inputHandlerChange}
            />
          </div>
          <div>
            <label>description</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={inputHandlerChange}
            />
          </div>
          <button type="submit">Add Post</button>
        </form>
      </div>
    )
}
export default AddPost