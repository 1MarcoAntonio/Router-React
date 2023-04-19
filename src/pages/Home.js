import { Link, useNavigate } from "react-router-dom";// Link prevent the page to reload and not sending a new http request

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate('/products');
  }

  return <>

    <h1>my homepage</h1>
    <p>go to <Link to="/products">the list of products</Link></p>
    <p>
      <button onClick={navigateHandler}>Navigate</button>
    </p>
  </>
}

export default HomePage;