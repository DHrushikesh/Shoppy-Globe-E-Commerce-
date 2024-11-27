import React, { StrictMode, Suspense } from 'react'; // Ensure React is imported for React.lazy
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Products from './Components/Products.jsx';
import ProductDetails from './Components/ProductDetails.jsx';
import Error from './Components/Error.jsx';
import { AiOutlineLoading3Quarters } from "react-icons/ai";

// Lazy loading Cart and Checkout components
const Cart = React.lazy(() => import('./Components/Cart.jsx'));
const Checkout = React.lazy(() => import('./Components/CheckOut.jsx'));

export const route = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Products />
      },
      {
        path: "Products/:id",
        element: <ProductDetails />
      },
      {
        path: "Cart",
        element: (
          <Suspense fallback={<AiOutlineLoading3Quarters className="size-10 animate-spin" />}>
            <Cart />
          </Suspense>
        )
      },
      {
        path: "Checkout",
        element: (
          <Suspense fallback={<AiOutlineLoading3Quarters className="size-10 animate-spin" />}>
            <Checkout />
          </Suspense>
        )
      }
    ],
    errorElement: <Error />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
