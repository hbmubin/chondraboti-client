import { Link } from "react-router";
import logo from "../assets/image/Logo.png"

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-stone-100 px-4">
      <div className="bg-white p-10 shadow text-center max-w-md w-full">
        <h1 className="text-6xl font-bold text-stone-500 mb-6">404</h1>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
            <div className="flex justify-center pb-5"><img className="w-16 md:w-20" src={logo} alt="" /></div>
        <p className="text-gray-600 mb-6">
          Oops! The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-stone-800 text-white px-6 py-3  hover:bg-stone-700 transition-colors"
        >
          Go Back Home
        </Link>
      </div>
    </div>
    );
};

export default NotFound;