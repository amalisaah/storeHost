import Cart from "./Cart";

const Checkout = () => {
  return (
    <>
      <section className="bg-grey text-black p-5">
        <div className="flex flex-row justify-around bg-white text-black p-5 rounded">
          <div>
            <h1 className="font-bold">John Doe</h1>
            <p>Lorem ipsum dolor sit amet.</p>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div>02000000</div>
          <div>
            <button className="bg-green text-white">Change</button>
          </div>
        </div>
      </section>
      <section className="p-5 bg-grey">
        <h2 className="text-black p-5 font-bold">Cart (1)</h2>
        <div className="flex flex-row justify-around">
          <div>
            <img src="../../public/images/Rectangle 1769.png" />
          </div>
          <div className="bg-white text-black p-5 text">
            <h2 className="font-bold">Leather Jacket with polished cotton</h2>
            <p>Seller: James Cottage</p>
            <p>2 Available</p>
          </div>
          <div className="font-bold text-black bg-white p-5 text-center items-center justify-center">
            GHS 2,093.00
          </div>
          <div className="bg-white items-center justify-center p-5">
            <button className="bg-grey text-black">-</button>
            <button className="bg-white text-black">1</button>
            <button className="bg-grey text-black">+</button>
          </div>
          <div className="flex flex-col p-5 bg-white">
            <button className="bg-grey text-black">Remove</button>
            <button className="bg-green text-white">Buy Now</button>
          </div>
        </div>
        <div className="grid grid-cols-3  text-black rounded p-5">
          <div className="col-span-2 bg-white text-black p-3 font-bold">
            GHS 2,093.00
          </div>
          <div className="bg-green text-white p-3 font-bold text-center rounded">
            Checkout
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
