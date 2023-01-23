const Banner = () => {
  return (
    <>
      <div className="bg-header-image p-5 ">
        {/* <img
          src="/images/Ecommerce/Rectangle 2.png"
          className="object-contain"
        /> */}
        <h1 className="text-center font-bold p-5 pt-5 text-white">
          Lorem Emporium
        </h1>
        <p className="text-center p-5 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          accusamus!
        </p>
        <p className="text-center text-white">Lorem ipsum dolor sit amet.</p>
        <div className="container flex flex-row-reverse p-5">
          <button className="bg-green text-white p-3 font-bold">
            Subscribe
          </button>
          <input
            className="bg-white p-3 rounded"
            placeholder="example@gmail.com"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
