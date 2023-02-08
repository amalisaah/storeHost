import { Outlet, useOutletContext } from "react-router-dom";
import Pages from "../../Components/Pages";
import Banner from "../Components/Banner";
// import Footer from "../Components/Footer";
import Footer from "../../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Navbar from "../Components/Navbar";

const EcomHome = () => {

  /*Controls editable states*/
  const [edit,setEdit,,labelVisible,pagesVisible,componentVisible,style,changeStyle,colorVisible,colorVisibility,sectionsVisible,onContentBlur,picture,handlePicChange,mobile] = useOutletContext() ;
  return (
    <>
      <Navbar />
      <Header />
      <Banner />
      <Main />
      <Footer />
    {pagesVisible ? <Pages pages={['Cart', ' Checkout', 'Delivery', 'Payment', 'Product']} /> : null}
    </>
  );
};

export default EcomHome;
