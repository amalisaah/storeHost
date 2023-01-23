import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

const ProductDescription = () => {
  return (
    <>
      <Navbar />
      <section className="bg-grey p-5">
        <div className="flex flex-row justify-around">
          {/* Left Div */}
          <div>
            <img src="../../public/images/Rectangle 1757.png" />
          </div>

          {/* Right Div */}
          <div className="bg-white p-5 rounded">
            <h2 className="text-black">Leather Jacket with polished cotton</h2>
            <div className="flex justify-center">
              <button className="bg-grey text-black items-center justify-center font-bold">
                GHS 2,093.00
              </button>
            </div>
            <div className="flex flex-row justify-between p-5">
              <button className="">Black</button>
              <button className="bg-brown text-white">Brown</button>
              <button className="bg-grey text-black">Grey</button>
            </div>
            <p className="text-center text-black">Size</p>
            <div className="flex flex-row justify-between p-5">
              <button className="bg-grey text-black font-bold">M</button>
              <button className="bg-grey text-black font-bold">L</button>
              <button className="bg-grey text-black font-bold">X</button>
              <button className="bg-grey text-black font-bold">XL</button>
              <button className="bg-grey text-black font-bold">XXL</button>
            </div>
            <div className="flex flex-row justify-around p-5">
              <button className="bg-grey text-green">Buy Now</button>
              <button className="bg-green text-white">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="container p-5">
          <h2 className="font-bold text-black p-5">Product Details</h2>
          <p className="text-black p-5">
            100% New Brand and High Quality Main Material:Imitation Leather
          </p>
          <p className="text-black p-5">
            Color:Brown,Black Size:M/L/XL/2XL/3XL M=shoulder=42cm=16.38
          </p>
          <p className="text-black p-5">
            in=chest=92cm=35.88 in=length=57cm=22.23 in=sleeve=58cm=22.62 in
          </p>
          <p className="text-black p-5">
            L=shoulder=43cm=16.77 in=chest=96cm=37.44 in=length=58cm=22.62
          </p>
          <p className="text-black p-5">
            in=sleeve=59cm=23.01 in XL=shoulder=44cm=17.16 in=chest=100cm=39
          </p>
          <p className="text-black p-5">
            in=length=60cm=23.4 in=sleeve=61cm=23.79 in 2XL=shoulder=45cm=17.55
          </p>
          <p className="text-black p-5">
            in=chest=104cm=40.56 in=length=61cm=23.79 in=sleeve=62cm=24.18 in
          </p>
          <p className="text-black p-5">
            3XL=shoulder=46cm=17.94 in=chest=108cm=42.12 in=length=63cm=24.57
          </p>
          <p className="text-black p-5">
            in=sleeve=64cm=24.96 in Package:1 x Jacket
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProductDescription;
