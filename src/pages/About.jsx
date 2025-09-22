import logo from "../assets/image/Logo.png"
import Common from "./Common";

const About = () => {
  return (
    <main>
      <Common></Common>
      <div className=" flex flex-col bg-stone-100 items-center pb-16 pt-6 px-4 ">
        <div className=" w-full bg-white  p-10 container-default">
          <div className="flex justify-center pb-5"><img className="w-24 md:w-32" src={logo} alt="" /></div>
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">About Us</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to <span className="font-semibold text-orange-500">Chondraboti</span>, your number one source for all things fashion. We're dedicated to giving you the very best of products, with
            a focus on quality, customer service, and uniqueness.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded in 2025, <span className="font-semibold text-orange-500">Chondraboti</span> has come a long way from its beginnings. When we first started out, our passion for eco-friendly and
            affordable fashion drove us to start our own business.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <div className="bg-orange-50 p-5 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-orange-500">100+</h2>
              <p className="text-gray-600 mt-2">Products</p>
            </div>
            <div className="bg-orange-50 p-5 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-orange-500">200+</h2>
              <p className="text-gray-600 mt-2">Happy Customers</p>
            </div>
            <div className="bg-orange-50 p-5 rounded-xl text-center">
              <h2 className="text-2xl font-bold text-orange-500">24/7</h2>
              <p className="text-gray-600 mt-2">Support</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
