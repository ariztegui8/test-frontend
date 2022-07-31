import React from 'react'

const Formulario = () => {
  return (
    <div className='container-formulario'>
        <p className='title-form'>¡Únete a nuestras novedades y promociones!</p>
        <form className='formulario'>
          <input
            type="text"
            placeholder='Ingresa tu nombre'
            className='input-text'
          />

          <input
          type="email"
          placeholder='Ingresa tu mail'
          className='input-email'
          />

          <input
            type="submit"
            value='Suscribirme'
            className='input-submit'
            />
            
        
        </form>
    </div>
  )
}

export default Formulario