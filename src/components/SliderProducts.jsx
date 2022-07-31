import useProducts from "../hooks/useProducts"
import Carousel from 'react-bootstrap/Carousel';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { useState } from "react";



const SliderProducts = () => {

    const {productos} = useProducts();
    console.log(productos);
    // const {imageUrl, installments, listPrice, price, productId, productName, stars} = producto

    const [value, setValue] = useState(0);
    const [btnHover, setBtnHover] = useState(false)


  return (
    <div className='container-slider'>
      
      <p className='title'>Más Vendidos</p>
     
       
        <Carousel className="carrousel">
            {productos.map(producto =>(
              <Carousel.Item interval={null} >
                <div className="caja">
                  <div>
                    <img src={producto.imageUrl} alt=""  className="d-block w-100" />
                  </div>

                  <div className="contenido-card">
                    <p className="name">{producto.productName}</p>
                      <Box
                        sx={{
                          '& > legend': { mt: 2 },
                        }}
                      >
                        <Rating name="read-only" value={producto.stars} readOnly />
                      </Box>
                    <p className="lista-precio">de $ {producto.listPrice}</p>
                    <p className="precio">por $ {producto.price}</p>
                    <p className="cuota">o en {producto.installments.quantity} x de R $ </p>
                    <button>comprar</button>
                  </div>
                </div>
              </Carousel.Item>
            ))}
        </Carousel>
      
    </div>
  )
}

export default SliderProducts