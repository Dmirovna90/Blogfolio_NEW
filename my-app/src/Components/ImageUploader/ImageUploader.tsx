import { useEffect, useState } from "react";
import ImageUploading from "react-images-uploading";
import Button from "../Button/Button";
import style from './ImageUploader.module.scss';

const ImageUploader = ({ onImageSelect, remove }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    onImageSelect(imageList);
  };
  useEffect(() => {
    setImages([]);
  }, [remove]);

  return (
    <div>
      <ImageUploading
        multiple={false}
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div>
            <div className = {style.buttonWrap}>
            <button
            className = {isDragging ? style.button : `${style.button} ${style.secondary}`}             
              onClick={onImageUpload}
              {...dragProps}
            >
              Click or Drop here
            </button>
            &nbsp;
            <Button buttonType="secondary" onClick={onImageRemoveAll}>Remove all images</Button>
            </div>
            <div>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image["data_url"]} alt="" width="300" />
                <div className="image-item__btn-wrapper">
                  <button className = {style.buttonImg} onClick={() => onImageUpdate(index)}>Update</button>
                  <button className = {style.buttonImg} onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
};
export default ImageUploader;
