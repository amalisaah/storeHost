import Navbar from "../Components/Navbar";

const Delivery = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="bg-grey p-10">
        <div className="p-5 text-black container">
          <p className="text-center">Delivered To</p>
        </div>
        <div className="bg-white text-black flex justify-around p-5 m-5 rounded">
          <div className="p-3">
            <h2 className="font-bold text-black">Robert Elinam</h2>
            <p>Address</p>
            <p>Pick Up Option</p>
          </div>
          <div className="p-3">
            <p>024000000</p>
          </div>
          <div className="p-3">
            <img src="/images/car.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Delivery;
