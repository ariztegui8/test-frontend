import Banner from "./components/Banner";
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
      </div>
    </ProductsProvider>
  );
}

export default App;
