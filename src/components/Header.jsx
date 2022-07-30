import logo1 from '../assets/logo1.jpg'
import search from '../assets/search.svg'
import user from '../assets/user.svg'
import buy from '../assets/buy.svg'

const Header = () => {
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
                <img src={user} alt="" />
                <p>Mi Cuenta</p>
            </div>

            <div className='buy'>
                <img src={buy} alt="" />
                <p>1</p>
            </div>
        </div>

    </div>
  )
}

export default Header