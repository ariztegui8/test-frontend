import Banner from "./components/Banner";
import Header from "./components/Header";
import { ProductsProvider } from "./context/ProductsProvider";

function App() {




  return (
    <ProductsProvider>
      <div className="container-padre">
        <Header />

        <Banner />
      </div>
    </ProductsProvider>
  );
}

export default App;
