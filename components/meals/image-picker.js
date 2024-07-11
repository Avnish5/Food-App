'use client'
import { useRef,useState } from 'react'
import Image from 'next/image';
import classes from './image-picker.module.css'
export default function ImagePicker({label,name})
{
    const[pickImage,setPickImage]=useState();
    const imageInput=useRef();

    function handlePickClick()
    { //console.log("hy");
      imageInput.current.click();
    }

    function handlePickImage(event)
    {
       
        const file=event.target.files[0];
       
        if(!file)
        {
            setPickImage(null);
            return;
        }

       
        const fileReader=new FileReader();
       
        fileReader.onload=()=>{
            
            setPickImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);

    }
    return(
        <div className={classes.picker}>
            <label htmlFor='image'>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickImage&&<p>No image picked yet</p>}
                    {pickImage&&<Image src={pickImage} fill/>}
               </div>
                <input
                className={classes.input}
                type='file'
                id={name}
                accept='image/png,imge/jpeg'
                name={name}
                ref={imageInput}
                onChange={handlePickImage}
                required
                />
                <button className={classes.button} onClick={handlePickClick} type="button">
                    Pick an Image
                </button>
            </div>
        </div>
    )
}