import logo1 from '../assets/logo1.jpg'
import search from '../assets/search.svg'
import user2 from '../assets/user2.svg'
import buy from '../assets/buy.svg'
import useProducts from '../hooks/useProducts'



const Header = () => {

    const {sumarCarrito} = useProducts();
    console.log(sumarCarrito);

  return (
    <div className='container-header'>
        <div>
            <img src={logo1} alt="" />
        </div>

        <div className='container-input'>
            <input
                type="text"
                placeholder='¿Qué estás buscando?'
            />
            <img src={search} alt="" />
        </div>

        <div className='container-cuenta'>
            <div className='cuenta'>
                <img src={user2} alt="" />
                <p>Mi Cuenta</p>
            </div>

            <div className='buy'>
                <img src={buy} alt="" />
                <div className='numero'>
                    <p>{sumarCarrito}</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header