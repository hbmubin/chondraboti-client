import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../Layout";
import ProductDetails from "../pages/ProductDetails";
import Collection from "../pages/Collection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/collection/:category/:subCategory",
        element: <Collection></Collection>
      },
      {
        path: "/:id/:name",
        element: <ProductDetails></ProductDetails>,
        loader: async ({ params }) => {
          const res = await fetch("/product_list.json");
          const data = await res.json();
          const product = data.find((item) => item.id === Number(params.id));
          if (!product) {
            throw new Response("Not Found", { status: 404 });
          }
          return product;
        },
      },
    ],
  },
]);

export default router;
