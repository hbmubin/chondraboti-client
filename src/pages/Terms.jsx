import Common from "./Common";

const Terms = () => {
  return (
    <main>
      <Common></Common>
      <div className=" flex flex-col bg-stone-100 items-center pb-16 pt-6 px-4 ">
        <div className="w-full bg-white p-10 container-default max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Terms & Conditions</h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Welcome to <span className="font-semibold text-orange-500">Chondraboti</span>. By accessing or using our website, you agree to comply with these Terms & Conditions. Please read them
            carefully.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            1. <span className="font-semibold">Use of Website:</span> You may use our website only for lawful purposes and in accordance with these terms.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            2. <span className="font-semibold">Products:</span> All product descriptions are provided to the best of our knowledge. We reserve the right to modify or discontinue products without
            notice.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            3. <span className="font-semibold">Orders:</span> By placing an order, you agree to provide accurate information. We reserve the right to cancel or refuse any order for any reason.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            4. <span className="font-semibold">Pricing & Payments:</span> Prices are subject to change without notice. Payments must be completed before order processing. We accept Cash on Delivery
            and all major online payment methods.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            5. <span className="font-semibold">Limitation of Liability:</span> Chondraboti is not responsible for any indirect, incidental, or consequential damages arising from the use of this
            website.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            6. <span className="font-semibold">Governing Law:</span> These terms are governed by the laws of Bangladesh. Any disputes will be subject to the exclusive jurisdiction of Bangladeshi
            courts.
          </p>

          <div className="mt-10 text-center">
            <p className="text-gray-600">
              By using our website, you agree to these terms. For any questions, please contact <span className="font-semibold text-orange-500 ">chondrabotifashion@gmail.com</span>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Terms;
