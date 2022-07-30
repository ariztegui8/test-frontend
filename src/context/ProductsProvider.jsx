import axios from "axios"
import { createContext, useEffect, useState } from "react"

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    const [productos, setProductos] = useState([]);

    useEffect(()=>{

        const obtenerProducts = async () =>{
            try {
                const url = 'https://corebiz-test.herokuapp.com/api/v1/products';
                const {data} = await axios(url)
                setProductos(data);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerProducts()

    }, [])


    return(
        <ProductsContext.Provider
            value={{
                productos,
            }}
        >
            {children}
        </ProductsContext.Provider>
    )
}

export{
    ProductsProvider
}

export default ProductsContext