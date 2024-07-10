'use client'
import { useRef } from 'react'
import classes from './image-picker.module.css'
export default function ImagePicker({label,name})
{
    const[pickImage,setPickImage]=useState();
    const imageInput=useRef();

    function handlePickClick()
    {
      imageInput.current.click();
    }

    function handlePickImage(event)
    {
        const file=event.target.files[0];

    }
    return(
        <div className={classes.picker}>
            <label htmlFor='image'>{label}</label>
            <div className={classes.controls}>
                <input
                className={classes.input}
                type='file'
                id={name}
                accept='image/png,imge/jpeg'
                name={name}
                ref={imageInput}
                onChange={handlePickImage}
                />
                <button className={classes.button} onClick={handlePickClick} type="button">
                    Pick an Image
                </button>
            </div>
        </div>
    )
}