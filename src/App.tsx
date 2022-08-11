import {useProducts} from "./storage/files/files.api";
import {FileCard} from "./components/FileCard";

function App() {

  const {loading, error, products} = useProducts()
  console.log(loading)
  console.log(products)

  return (
    <div className="App flex flex-col items-center">
      <h1 className="m-5 text-2xl">Файловый сервис</h1>
      {loading && <p className="text-center">Loading...</p> }
      {error && <p className="text-center">{error}</p> }
      <div className="container w-1/2">
        {products?.map(file => (
          <FileCard model={file}/>
        ))}
      </div>
    </div>
  );
}

export default App;
