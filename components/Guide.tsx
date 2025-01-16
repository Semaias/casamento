import React from 'react'

const Guide = () => {
  return (
    <section className="text-[#536E5C]  body-font relative" id="location">


      <div className="absolute inset-0">
        <div className='text-center justify-center'>
          <h3 className='text-3xl text-[#394C40] font-black pb-5'> Localização</h3>
        </div>

        <iframe width="100%" height="100%" title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.280656981064!2d-35.20724592590542!3d-6.092845459767039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b28b319a0d7f6d%3A0x88eed99112ebf48!2sNyzia%20Garden%20Recep%C3%A7%C3%B5es!5e0!3m2!1spt-BR!2sbr!4v1729283320016!5m2!1spt-BR!2sbr"
        ></iframe>
      </div>
      <div className="container text-center px-5 py-48 mx-auto flex">
        <div
          className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h3 className="text-xl mb-1 font-black">Não se perca!</h3>
          <p className="leading-relaxed mb-1">
            Sua presença é muito importante para nós! <br /> Por isso, <span className='font-bold'>confirme até 1° de maio</span>, para sabermos quem estará conosco neste dia especial.
          </p>
          <div className="relative mb-4">

          </div>
          <a
            href="https://maps.app.goo.gl/gZoTUUTofnF9EnbW8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#87B295] border-0 py-2 mb-2 px-6 focus:outline-none hover:bg-[#8DBA9C] rounded text-lg"
          >
            Local do Casamento
          </a>

          <a
            href="https://wa.me/5584994738643"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-[#536E5C] border-0 py-2 px-6 focus:outline-none hover:bg-[#394C40] rounded text-lg"
          >
            Confirmar presença
          </a>
        </div>
      </div>
    </section>
  )
}

export default Guide