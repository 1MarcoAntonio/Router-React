import { RouterProvider, createBrowserRouter } from "react-router-dom"; // function provided by the router to define the routes
import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// pass an array of route definition objects
const router = createBrowserRouter([
  {
    path: '/',// this rout acts like a parent rout to the others
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> }, // allways have a path property
      { path: '/products', element: <ProductsPage /> },
      { path: '/products/:productId', element: <ProductDetailPage /> }

    ],
  },
])


function App() {
  return <RouterProvider router={router} />;
}

export default App;
