
import Footer from "./Component/Footer"
import Header from "./Component/Header"
import Homepage from "./Component/Homepage"
import ContactPage from "./Contact"
import Homepage from "./Homepage"
import SingleProduct from "./SingleProduct"
import Cart from "./Cart.jsx";

function App() {
  return (
    <>
    <Header/>
    <Homepage/>
    <Footer/>
    <ContactPage/>
    <BlogPage/>
      
    {/* <Header/> */}
    {/*<Homepage/>*/}
    {/* <Footer/> */}
    <Cart/>

    </>
  )
}

export default App