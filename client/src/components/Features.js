import { useState } from "react";
import Catalogue from "./Catalogue";
import SearchBar from "./SearchBar";
import Cart from "./Cart";
import axios from "axios";
import Filter from "./Filter";
import Pagination from "./Pagination";
import Footer from "./Footer";
import Slides from "./Slides";

function Features() {
  // Products ------------------------------------------->
  const [products, setProducts] = useState([]);
  const [productsResult, setProductsResult] = useState([]);
  const [input, setInput] = useState("");

  // Condition ------------------------------------------>
  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");

  // Pagination ----------------------------------------->
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(12);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirsProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirsProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Conexion Back ----------------------------------------->
  // Route --> /api/search
  const onSearch = (product) => {
    setInput(product);
    axios
      .get(`http://localhost:1337/api/search?q=${product}`)
      .then((p) => {
        setProducts(p.data);
        setProductsResult(p.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Sort ------------------------------------------------>
  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);
    setProducts(
      products.slice().sort((a, b) =>
        sort === "lowest"
          ? a.price > b.price
            ? 1
            : -1
          : sort === "highest"
          ? a.price < b.price
            ? 1
            : -1
          : // Ordena por id (por defecto al colocar Price)
          a.id > b.id
          ? 1
          : -1
      )
    );
  };

  // Filter -------------------------------------------->
  const filterProducts = (event) => {
    let productCondition = event.target.value;

    if (productCondition === "new" || productCondition === "used") {
      setCondition(productCondition);
      setProducts(
        productsResult.filter(
          (product) => product.condition.indexOf(productCondition) >= 0
        )
      );
    } else {
      setCondition(productCondition);
      setProducts(productsResult);
    }
  };

  // Cart - AddItems ----------------------------------->
  const [cartItems, setCartItems] = useState([]);
  const itemsCart = cartItems.slice(); // Clona los items del carrito dentro del estado

  const addToCart = (product) => {
    let alreadyInCart = false;
    itemsCart.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });
    if (!alreadyInCart) {
      itemsCart.push({ ...product, count: 1 });
    }
    setCartItems(itemsCart); // --> Actualizar estado
  };
  // Cart - RemoveItems -------------------------------->
  const removeFromCart = (product) => {
    setCartItems(itemsCart.filter((x) => x.id !== product.id));
  };

  return (
    <div>
      <div>
        <SearchBar onSearch={onSearch} />
      </div>
      <div>
        <Filter
          count={products.length}
          sort={sort}
          condition={condition}
          sortProducts={sortProducts}
          filterProducts={filterProducts}
          input={input}
        />
        <Categories searchCat={searchCat} categories={categories} />
        <Slides />
        <div className="content">
          <div className="main">
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
            <Catalogue products={currentProducts} addToCart={addToCart} />
            <Pagination
              key={"#"}
              productsPerPage={productsPerPage}
              totalProducts={products.length}
              paginate={paginate}
            />
          </div>
          <div className="sidebar">
            <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Features;
