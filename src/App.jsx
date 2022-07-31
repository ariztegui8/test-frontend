import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import SliderProducts from "./components/SliderProducts";
import { ProductsProvider } from "./context/ProductsProvider";


function App() {

  


  return (
    <ProductsProvider>
      <div className="container-padre">
        <Header />

        <Banner />

        <SliderProducts />

        <Formulario />

        <Footer />
      </div>
    </ProductsProvider>
  );
}

export default App;
