import Common from "./Common";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BounceLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true)
    emailjs.sendForm(
      "service_gt0wghd",   // EmailJS Service ID
      "template_6lhen34",  // Template ID
      form.current,
      "W9HJva_41wrszjCQk"    // Public Key
    )
    .then((result) => {
        setIsSending(false)
        e.target.reset();
        toast.success('Email sent successfully.')
    }, (error) => {
        setIsSending(false)
        console.log(error)
        toast.error('Failed to send message.')
    });
  };
    return (
       <main>
        <Toaster position="top-center" reverseOrder={false} />
      <Common></Common>
      <div className=" flex flex-col bg-stone-100 items-center pb-16 pt-6 px-4 ">
        <div className="w-full bg-white p-10 container-default">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Contact Us</h1>
        <p className="text-gray-600 mb-6 leading-relaxed text-center">
          We'd love to hear from you! Whether you have questions, feedback, or want to know more about our products, feel free to reach out.
        </p>

        <div className="mt-10 grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Address</h2>
              <p className="text-gray-600 mt-1">123 Chondraboti Street,  Shahbag, Dhaka-1000</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600 mt-1">+8801571076572</p>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600 mt-1">chondrabotifashion@gmail.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
      <input
        type="text"
        name="from_name"
        placeholder="Your Name"
        className="border border-stone-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-stone-500"
      />
      <input
        type="email"
        name="from_email"
        placeholder="Your Email"
        className="border border-stone-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-stone-500"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows={5}
        className="border border-stone-300 px-4 py-2 focus:outline-none focus:ring-1 focus:ring-stone-500"
      />
      <button
        type="submit"
        className="bg-stone-800 text-white px-6 py-3 mt-2 hover:bg-stone-700 transition-colors flex justify-center cursor-pointer"
      >{isSending ? <BounceLoader size={24} color="white" /> : "Send Message"}
      </button>
    </form>
          </div>
        </div>
      </div>
      </div>
    </main>
    );
};

export default Contact;