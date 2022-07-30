import useProducts from "../hooks/useProducts"
import Products from "./Products";



const SliderProducts = () => {

    const {productos} = useProducts();
    console.log(productos);

  return (
    <div className='container-slider'>
        <p className='title'>Más Vendidos</p>
        {productos.map(product =>(
            <Products 
                key={product.productId}
                product={product}
            />
        ))}
    </div>
  )
}

export default SliderProducts