import {useProducts} from "./storage/files/files.api";
import {FileCard} from "./components/FileCard";
import {OpenModalButton} from "./components/OpenModalButton";
import {useContext} from "react";
import {ModalContext} from "./context/ModalContext";
import {IFileInfo} from "./models/files_models";
import {Modal} from "./components/Modal";
import {UploadFile} from "./components/UploadFile";

function App() {

  const {loading, error, products, setProducts} = useProducts()
  const {modal, open, close} = useContext(ModalContext)
  const onDeleteHandler = (id: string) => setProducts(products.filter((f) => f.id !== id))

  const onCreateHandler = (product: IFileInfo) => {
    close()
    setProducts([...products, product])
  }

  return (
    <div className="App flex flex-col items-center">
      <h1 className="m-5 text-2xl">Файловый сервис</h1>
      {loading && <p className="text-center">Loading...</p> }
      {error && <p className="text-center">{error}</p> }
      <div className="container w-1/2">
        {products?.map(file => (
          <FileCard model={file} onDeleteHandler={onDeleteHandler}/>
        ))}
        {products.length === 0 && <p className="text-center font-bold text-xl">No elements</p> }
      </div>
      { modal && <Modal title="Загрузка файла" onClose={close}>
          <UploadFile onCreate={onCreateHandler}/>
      </Modal>}
      { !modal && <OpenModalButton open={open}/>}
    </div>
  );
}

export default App;
