import React, {useState} from "react";
import axios from "axios";
import {IFileInfo} from "../models/files_models";


interface CreateProductProps {
    onCreate: (fileInfo: IFileInfo) => void
}

export function UploadFile({ onCreate}: CreateProductProps){

    const [value, setValue] = useState<File>()
    const [error, setError] = useState('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files){
            setValue(event.target.files[0])
        }
        else{
            setValue(undefined)
        }
    }


    const submitHandler= async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')
        console.log(value);
        if (!value){
            return
        }
        const formData = new FormData();
        formData.append('file', value, value.name);

        // const response = await axios.get<IFileInfo[]>('http://127.0.0.1:8000/files/all',
        //   {headers: {"Access-Control-Allow-Origin": "*"} })
        const response = await axios.post<IFileInfo>('http://127.0.0.1:8000/files/',
          formData,{headers: {"Access-Control-Allow-Origin": "*"} })
        if(!response.data.created){
            alert('File already upload')
            return
        }
        onCreate(response.data)
    }


    return (
        <form onSubmit={submitHandler}>
            <input
                type="file"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Upload file"
                onChange={changeHandler}
            />
            { error && <p> {error}</p>}
            <button type="submit" className="py-2 px-4 border hover:text-white
                    bg-yellow-400">
                Create
            </button>
        </form>
    )
}

