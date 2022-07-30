import axios from "axios"
import { createContext, useEffect } from "react"

const ProductsContext = createContext()

const ProductsProvider = ({children}) => {

    useEffect(()=>{

        const obtenerProducts = async () =>{
            try {
                const url = 'https://corebiz-test.herokuapp.com/api/v1/products';
                const {data} = await axios(url)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerProducts()

    }, [])


    return(
        <ProductsContext.Provider
            value={{

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