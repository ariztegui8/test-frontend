import logoFooter from '../assets/logo-footer.svg'
import user from '../assets/user.svg'

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className='textos-footer'>
          <p className='title-footer'>Ubicación</p>
          <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
          <p>Alphavile SP</p>
          <p>brasil@corebiz.ag</p>
          <p>+55 11 3090 1039</p>
        </div>

        <div className='btn-footer'>
            <button><img src={user} alt="" />CONTÁCTANOS</button>
            <button>HABLA CON UN CONSULTOR</button>
        </div>

        <div className='icons-footer'>
            <div>
              <p>Desarrollado por</p>
              <img src={logoFooter} alt="" />
            </div>

            <div>
              <p>Desarrollado por</p>
              <img src="" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer