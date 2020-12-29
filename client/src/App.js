import { useState } from "react";
import Catalogue from "./components/Catalogue";
import SearchBar from "./components/SearchBar";
import axios from "axios";
import Filter from "./components/Filter";
import Pagination from "./components/Pagination";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [productsResult, setProductsResult] = useState([]);

  const [condition, setCondition] = useState("");
  const [sort, setSort] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(10);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Conexión con back
  // /api/search
  const onSearch = (product) => {
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

  const sortProducts = (event) => {
    const sort = event.target.value;
    setSort(sort);
    setProducts(
      products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.title
        )
    );
  };

  const filterProducts = (event) => {
    const productCondition = event.target.value;

    if (productCondition === "new") {
      setCondition(productCondition);
      setProducts(
        productsResult.filter(
          (product) => product.condition.indexOf(productCondition) >= 0
        )
      );
    } else if (productCondition === "used") {
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

  const [cartItems, setCartItems] = useState([]);
  const itemsCart = cartItems.slice();

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
    setCartItems(itemsCart);
  };

  const removeFromCart = (product) => {
    setCartItems(itemsCart.filter((x) => x.id !== product.id));
  };

  return (
    <div>
      <Filter
        count={products.length}
        sort={sort}
        condition={condition}
        sortProducts={sortProducts}
        filterProducts={filterProducts}
      />
      <SearchBar onSearch={onSearch} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Pagination
        productsPerPage={productsPerPage}
        totalProducts={products.length}
        paginate={paginate}
      />
      <Catalogue products={currentProducts} addToCart={addToCart} />
    </div>
  );
}

export default App;
