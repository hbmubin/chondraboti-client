import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { useState } from "react";
import OrderModal from "./OrderModal";
import { Toaster } from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import InnerImageZoom from "react-inner-image-zoom";
import "../../zoom/style.css";
const ProductTop = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [sizeError, setSizeError] = useState("");
  const [productData, setProductData] = useState(null);

  const decrease = () => {
    setQuantity((q) => (q > 1 ? q - 1 : 1));
  };

  const increase = () => {
    setQuantity((q) => (q < 10 ? q + 1 : 10));
  };

  const handleChange = (e) => {
    let val = e.target.value;

    if (val === "") {
      setQuantity("");
      return;
    }

    if (/^\d+$/.test(val)) {
      let num = Number(val);
      if (num > 10) num = 10;
      if (num < 1) num = 1;
      setQuantity(num);
    }
  };

  const handleKeyDown = (e) => {
    if (["Backspace", "Delete", "Tab", "ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) {
      return;
    }

    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleOpenModal = (e) => {
    e.preventDefault();
    if (!selectedSize && product?.sizes) {
      setSizeError("select a size");
      return;
    }
    const form = e.target;
    const product_size = selectedSize || "Common";
    const product_quantity = form.product_quantity.value;
    const product_data = {
      ...product,
      product_size,
      product_quantity,
    };
    setProductData(product_data);
    setIsOpen(true);
  };
  return (
    <div className="product-top">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-4">
        <div className="md:px-6">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            speed={800}
            // autoplay={{
            //   delay: 5000,
            //   disableOnInteraction: true,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {product?.images.map((img, idx) => (
              <SwiperSlide key={idx} className="lg:px-16 aspect-[5/6] max-h-[460px]">
<InnerImageZoom
className=" zoom-img"
    src={img}
    zoomSrc={img}
    zoomType="click"
    zoomPreload
  />
                {/* <LazyLoadImage className=" object-cover min-h-full min-w-full object-center" src={img} alt="" /> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div>
          <form onSubmit={handleOpenModal}>
            <h2 className="text-2xl font-medium">{product?.product_name}</h2>
            <div className=" md:text-xl text-base pt-3">
              <span className="font-medium">৳{product?.discount_price}</span>
              <span className="line-through md:text-base text-sm text-stone-500 pl-2">৳{product?.price}</span>
              <span className="md:text-base text-sm ml-2 text-orange-600 font-medium">{(((product.price - product.discount_price) / product.price) * 100).toFixed(0)}%OFF</span>
            </div>
            <div className={`pt-6 ${!product?.sizes && "hidden"}`}>
              <label className="block mb-2 font-medium">
                select a size <span className="text-red-600">*</span>
              </label>
              <div className="flex gap-2">
                {product?.sizes?.map((s) => (
                  <label
                    key={s}
                    className={`
              cursor-pointer border border-stone-300 w-10 h-10 flex items-center justify-center
              ${selectedSize === s ? " bg-stone-900 text-white  border-none font-medium" : "text-stone-500"}
              transition
            `}
                  >
                    <input
                      type="radio"
                      name="product_size"
                      value={s}
                      checked={selectedSize === s}
                      onChange={() => {
                        setSizeError(""), setSelectedSize(s);
                      }}
                      className="hidden"
                    />
                    {s.toUpperCase()}
                  </label>
                ))}
              </div>
              <div className="text-red-600 text-sm">{sizeError}</div>
            </div>
            <div className="flex  pt-6 gap-3">
              <div className="flex items-center border border-stone-300 px-3 py-1">
                <button onClick={decrease} className="text-stone-800 text-xl px-2 hover:text-black cursor-pointer" type="button">
                  −
                </button>

                <input
                  name="product_quantity"
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={quantity}
                  onChange={handleChange}
                  onKeyDown={handleKeyDown}
                  className="w-12 text-center font-semibold text-stone-800 outline-none"
                />

                <button onClick={increase} className="text-stone-800 text-xl px-2 hover:text-black cursor-pointer" type="button">
                  +
                </button>
              </div>
              <button type="submit" className="uppercase py-2 bg-black text-white px-10 font-medium cursor-pointer">
                Order Now
              </button>
            </div>
            <div className="mt-8">
              <div className="font-medium mt-1">Product Info</div>
              <p className="text-sm pt-3 leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: product?.description }} />
            </div>
          </form>
        </div>
      </div>
      {isOpen && <OrderModal setIsOpen={setIsOpen} productData={productData}></OrderModal>}
    </div>
  );
};

export default ProductTop;
