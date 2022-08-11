import {IFileInfo} from "../models/files_models";

interface FileCardProps{
  model: IFileInfo
}

export function FileCard({model}: FileCardProps){
  console.log(model)
  return (
    <div className="border py-2 rounded flex flex-col items-center mb-2 justify-between">
      <img src={model.url_preview} className="w-1/2" alt={model.title}/>
      <p className="font-xl p-2">{model.title}</p>
      <div className="flex flex-wrap flex-wrap-reverse items-center">
        <span>Расширение: </span>
        <span className="font-bold">{model.extension}</span>
      </div>
    </div>
  )
}