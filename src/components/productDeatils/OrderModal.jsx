import { useState } from "react";
import toast from "react-hot-toast";
import { BsCash } from "react-icons/bs";
import { IoMdCheckmark, IoMdClose } from "react-icons/io";
import {BounceLoader} from "react-spinners"


const OrderModal = ({ setIsOpen, productData }) => {
    const options = [
    {
      value: "Cash",
      label: "Cash",
      img: <BsCash size={26} />,
    },
  ];
  const [selectedMethod, setSelectedMethod] = useState(options[0]?.value);
  const [selectedDeliveryCharge, setSelectedDeliveryCharge] = useState(null);
  const [deliveryChargeError, setDeliveryChargeError] = useState("");
  const [methodError, setMethodError] = useState("");
  const [isLoading, SetIsLoading] = useState(false)

  const deliveryChargeList = [
    {
      value: 80,
      label: "Inside Dhaka ( 80 TK )",
    },
    {
      value: 140,
      label: "Outside Dhaka ( 140 TK )",
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDeliveryCharge) {
      setDeliveryChargeError("select an area");
      return;
    }
    if (!selectedMethod) {
      setMethodError("select an method");
      return;
    }
    SetIsLoading(true)
    const form = e.target;
    const full_name = form.full_name.value;
    const phone_number = form.phone_number.value;
    const full_address = form.full_address.value;
    const delivery_charge = selectedDeliveryCharge;
    const method = form.method.value;
    const total = `৳${productData?.discount_price - selectedDeliveryCharge}`;
    const now = new Date();

    const date = now.toISOString().split("T")[0];

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12; // 0 becomes 12
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const time = `${hours}:${minutes}:${seconds} ${ampm}`;

    const order_data = {
      ...productData,
      full_name,
      phone_number,
      full_address,
      delivery_charge,
      method,
      total,
      date,
      time,
      status: "order request",
    };
    // console.log(order_data);

    fetch("https://script.google.com/macros/s/AKfycbzONgGtW2cGNoUdpep2VIILKtcrYnvq5dG2qxS9WBDhFbS6M-2xx74wrOCrkp3lOTVw/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(order_data),
    })
      .then((res) => {
        setIsOpen(false);
        setTimeout(() => {
          document.querySelector(".product-top .confirm-modal").classList.add("active");
          SetIsLoading(false)
        }, 100);
        toast.custom((t) => (
          <div className={`${t.visible ? "animate-enter" : "animate-leave"} h-screen w-screen bg-[#00000038] pointer-events-auto shadow-md duration-150 flex justify-center items-center`}>
            <div className={`bg-white p-4 confirm-modal`}>
              <div className="flex justify-center w-full text-green-500">
                <IoMdCheckmark size={50} />
              </div>
              <div className="text-center">
                <div className="text-2xl text-green-500 font-bold">Thanks!</div>
                <div className="font-medium pt-2">Your order has been successfully completed</div>
                <div className="pb-3 pt-1 text-sm">Our representative will contact you very soon</div>
              </div>
              <div className="flex justify-center w-full">
                <button onClick={() => toast.dismiss(t.id)} className="bg-black text-white px-5 py-2 text-xl cursor-pointer">
                  Ok
                </button>
              </div>
            </div>
          </div>
        ));
        // console.log(res, "Order sent");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-[#00000085] z-20">
      <div className="bg-stone-100  max-w-xl w-full p-6 relative overflow-auto h-full md:pb-6 pb-20">
        <h2 className="text-xl font-semibold mb-4 text-center">Order Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-3 pb-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
              <div className="flex flex-col">
                <label className="font-medium pb-1" htmlFor="full_name">
                  Name <span className="text-red-600">*</span>
                </label>
                <input required name="full_name" className="border border-stone-300 p-1.5 bg-white focus:outline-none focus:border-stone-400" type="text" placeholder="Your Name" />
              </div>
              <div className="flex flex-col">
                <label className="font-medium pb-1" htmlFor="phone_number">
                  Number <span className="text-red-600">*</span>
                </label>
                <input required name="phone_number" className="border border-stone-300 p-1.5 bg-white focus:outline-none focus:border-stone-400" type="text" placeholder="Your Phone Number" />
              </div>
            </div>
            <div className="flex flex-col">
              <label className="font-medium pb-1" htmlFor="full_address">
                Address <span className="text-red-600">*</span>
              </label>
              <textarea
                required
                name="full_address"
                rows={2}
                className="border border-stone-300 p-1.5 bg-white resize-none focus:outline-none focus:border-stone-400"
                placeholder="Your Full Address"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Area <span className="text-red-600">*</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {deliveryChargeList.map((charge) => (
                  <label
                    key={charge.value}
                    className={`cursor-pointer border py-3 flex justify-center transition
            ${selectedDeliveryCharge === charge.value ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-500 border-stone-300 hover:border-stone-400"}`}
                  >
                    <input
                      type="radio"
                      value={charge.value}
                      checked={selectedDeliveryCharge === charge.value}
                      onChange={() => {
                        setDeliveryChargeError(""), setSelectedDeliveryCharge(charge.value);
                      }}
                      className="hidden"
                    />
                    <span className="md:text-sm text-xs font-medium">{charge.label}</span>
                  </label>
                ))}
              </div>
              <div className="text-sm text-red-600">{deliveryChargeError}</div>
            </div>
            <div>
              <label className="block mb-2 font-medium">
                Payment Method <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-2">
                {options.map((option) => (
                  <label
                    key={option.value}
                    className={`cursor-pointer border w-16 h-16 flex flex-col items-center justify-center gap-0.5 transition
            ${selectedMethod === option.value ? "bg-stone-900 text-white border-stone-900" : "bg-white text-stone-500 border-stone-300 hover:border-stone-400"}`}
                  >
                    <input
                      type="radio"
                      name="method"
                      value={option.value}
                      checked={selectedMethod === option.value}
                      onChange={() => {
                        setMethodError(""), setSelectedMethod(option.value);
                      }}
                      className="hidden"
                    />
                    {option.img}
                    <span className="text-xs font-medium">{option.label}</span>
                  </label>
                ))}
              </div>
              <div className="text-sm text-red-600">{methodError}</div>
            </div>
          </div>
          <div className="bg-white p-3 border border-stone-300">
            <div className="font-medium text-center pb-3">Order Summery</div>
            <div>
              <h3 className="text-sm pb-1">
                <span className="font-medium pr-1">Product Name:</span>{productData?.product_name}
              </h3>
              <div className="text-sm pb-1">
                <span className="font-medium pr-1">Size:</span>{productData?.product_sizes}
              </div>
              <div className="text-sm pb-3">
                <span className="font-medium pr-1">Quantity:</span>{productData?.product_quantity}
              </div>
              <div className="bg-stone-100 p-3 flex flex-col gap-2">
                <div className="text-sm pb-1 flex justify-between border-b border-stone-300">
                  <span className="font-medium pr-1">Product Price:</span>৳{productData?.discount_price}
                </div>
                <div className="text-sm pb-1 flex justify-between border-b border-stone-300">
                  <span className="font-medium pr-1">Delivery charge:</span>৳{selectedDeliveryCharge}
                </div>
                <div className="text-sm flex justify-between">
                  <span className="font-medium pr-1">Total:</span>
                  <span id="total" className="text-orange-500 font-medium">৳{productData?.discount_price + selectedDeliveryCharge}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-2 pt-3">
            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 bg-stone-300 hover:bg-stone-400 font-medium cursor-pointer">
              Cancel
            </button>
            <button type="submit" className="w-36 flex justify-center items-center py-2 bg-black text-white font-medium hover:bg-stone-900 cursor-pointer">
              {isLoading ? <BounceLoader size={24} color="white" /> : "Confirm Order"}
            </button>
          </div>
        </form>
        <button onClick={() => setIsOpen(false)} className="absolute top-3 right-3 text-stone-900 hover:text-stone-700 text-xl font-bold cursor-pointer" aria-label="Close modal">
          <IoMdClose size={24} />
        </button>
      </div>
    </div>
  );
};

export default OrderModal;
