import Common from "./Common";

const Privacy = () => {
  return (
    <main>
      <Common></Common>
      <div className=" flex flex-col bg-stone-100 items-center pb-16 pt-6 px-4 ">
<div className="w-full bg-white p-10 container-default max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Privacy Policy</h1>
        <p className="text-gray-600 mb-6 leading-relaxed">
          At <span className="font-semibold text-orange-500">Chondraboti</span>, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We collect information that you provide directly to us, such as name, email, phone number, and payment details. This information is used to process orders, provide customer support, and improve our services.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          We do not sell, trade, or rent your personal information to others. All data is stored securely and only accessed by authorized personnel.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Cookies may be used to enhance your experience on our website, analyze traffic, and provide personalized content. You can disable cookies in your browser settings, but some features may not function properly.
        </p>
        <p className="text-gray-600 mb-6 leading-relaxed">
          By using our website, you agree to the terms of this Privacy Policy. For any questions regarding your personal data, please contact us at <span className="font-semibold text-orange-500">support@chondraboti.com</span>.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="bg-orange-50 p-5 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-orange-500">Safe & Secure</h2>
            <p className="text-gray-600 mt-2">Your data is protected with top-level security measures.</p>
          </div>
          <div className="bg-orange-50 p-5 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-orange-500">No Third-Party Sharing</h2>
            <p className="text-gray-600 mt-2">We never sell or share your personal information.</p>
          </div>
        </div>
      </div>
      </div>
    </main>
  );
};

export default Privacy;
