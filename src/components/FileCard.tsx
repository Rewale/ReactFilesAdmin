import {IFileInfo} from "../models/files_models";
import {deleteFile} from "../storage/files/files.api";
import React from "react";

interface FileCardProps{
  model: IFileInfo,
  onDeleteHandler: (id: string) => void
}

export function FileCard({model, onDeleteHandler}: FileCardProps){
  const deleteHandler = () => {
    deleteFile(model.id).then(_ => console.log(`${model.id} удален`))
    onDeleteHandler(model.id)
  }

  return (
    <div className="border py-2 rounded flex flex-col items-center mb-2 justify-between">
      <img src={model.url_preview}
           className="w-1/2"
           alt="loading preview..."/>
      <p className="font-xl p-2">{model.title}</p>
      <div>
        <span>Расширение: </span>
        <span className="font-bold">{model.extension}</span>
      </div>
      <button className="rounded bg-red-500 p-2 text-white" onClick={deleteHandler}>Удалить</button>
      <a className="rounded bg-green-500 my-2 p-2 text-white" href={`http://127.0.0.1:8000/files/?file_id=${model.id}`}
         download>Download original</a>
    </div>
  )
}