import React from 'react'

const Guide = () => {
  return (
    <section className="text-gray-600 body-font relative" id="location">
      
      
      <div className="absolute inset-0">
      <div className='text-center justify-center'>
        <h3 className='text-2xl font-bold pb-5'> Localização</h3>  
      </div>

        <iframe width="100%" height="100%" title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.280656981064!2d-35.20724592590542!3d-6.092845459767039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b28b319a0d7f6d%3A0x88eed99112ebf48!2sNyzia%20Garden%20Recep%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1729283320016!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
      <div className="container px-5 py-48 mx-auto flex">
        <div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-xl mb-1 font-medium">Não se perca!</h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Confirme sua presença <br></br> Manda um zap
          </p>
          <div className="relative mb-4">

          </div>
          <button
            className="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Link pro whatsapp</button>
        </div>
      </div>
    </section>
  )
}

export default Guide