import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Layout from "../Layout";
import ProductDetails from "../pages/ProductDetails";
import Collection from "../pages/Collection";
import Search from "../pages/Search";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Faqs from "../pages/Faqs";
import Privacy from "../pages/Privacy";
import Terms from "../pages/Terms";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <NotFound></NotFound>,
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
        path: "/search/:search",
        element: <Search></Search>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/faqs",
        element: <Faqs></Faqs>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "/privacy-policy",
        element: <Privacy></Privacy>
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
