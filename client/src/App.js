import { useState } from "react";
import Catalogue from "./components/Catalogue";
import SearchBar from "./components/SearchBar";
import axios from "axios";

function App() {

  const [products, setProducts] = useState([]);

  // Conexión con back
  // /api/search
  const onSearch = (product) => {
    axios.get(`http://localhost:1337/api/search?q=${product}`)
      .then((p) => {
        setProducts(p.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (

    <div>
      <SearchBar onSearch = {onSearch} />
      <Catalogue products = {products} />
    </div>
  );
}

export default App;
