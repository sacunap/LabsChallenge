import { Link } from "react-router-dom";
import ShoppingPhoto from "../Styles/img/home.jpg";

function Home() {
  return (
    <div>
      <Link className="link" to="/search">
        <div className="text">
          <p>Time To Shop!</p>
          <h1>Lets Go!</h1>
        </div>
      </Link>
      <img src={ShoppingPhoto} alt="shoppingPhoto" />
    </div>
  );
}

export default Home;
