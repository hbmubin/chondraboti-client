import { useState } from "react";
import Common from "./Common";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const Faqs = () => {
    const faqs = [
    {
      question: "What is your return policy?",
      answer: "You can return any product within 7 days of delivery. Make sure the product is unused and in original packaging."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Currently we only ship within Bangladesh. International shipping will be available soon."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept only Cash on Delivery at this moment, bKash, Nagad, Rocket, and all major credit/debit cards wil be available soon."
    },
    {
      question: "Can I change my order after placing it?",
      answer: "You can modify your order within 1 hour of placement by contacting our support team."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <main>
      <Common></Common>
      <div className=" flex flex-col bg-stone-100 items-center pb-16 pt-6 px-4 ">
        <div className="w-full bg-white p-10 container-default">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">FAQs</h1>
        <p className="text-gray-700 mb-10 leading-relaxed text-center">
          Here are some frequently asked questions. If you have more queries, feel free to contact us.
        </p>

        <div className="flex flex-col gap-4">
          {faqs?.map((faq, idx) => (
            <div key={idx} className="border border-stone-300 p-4 bg-stone-50">
              <button
                onClick={() => toggle(idx)}
                className="flex justify-between items-center w-full text-left font-medium text-gray-700"
              >
                {faq.question}
                {openIndex === idx ? (
                  <HiOutlineChevronUp size={24} />
                ) : (
                  <HiOutlineChevronDown size={24} />
                )}
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
      </div>
    </main>
  );
};

export default Faqs;
