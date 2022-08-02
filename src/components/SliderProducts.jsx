import useProducts from "../hooks/useProducts"

import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



const SliderProducts = () => {

    const {productos, contador} = useProducts();

    const options = {
        items:'4',
        margin: 10,
        dots: false,
        nav: true,
        loop: true,
        responsive: {
          0: {
            items: 2,
            dots: true,
            nav: false,
        },
        414: {
            items: 2,
            dots: true,
            nav: false,
        },
        576: {
            items: 2,
            dots: true,
            nav: false,
        },
        768: {
            items: 3,
            dots: false,
            nav: true,
        },
        992: {
          items: 4,
          dots: false,
          nav: true,
      },
      },
  };

  return (
    <div className='container-slider'>
      
      <p className='title'>Más Vendidos</p>
     
        <OwlCarousel
          className='owl-theme'
          {...options}
        >

          {productos.map(producto =>(
            <div key={producto.productId} className='item'>
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
                  <p className="cuota">o en x de R $ </p>
                  <button
                    onClick={contador}
                  >comprar</button>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
    </div>
  )
}

export default SliderProducts