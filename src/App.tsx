import {useProducts} from "./storage/files/files.api";
import {FileCard} from "./components/FileCard";

function App() {

  const {loading, error, products, setProducts} = useProducts()
  const onDeleteHandler = (id: string) => setProducts(products.filter((f) => f.id !== id))

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
    </div>
  );
}

export default App;
