import Image from 'next/image';

const Features = () => {
  return (
    <section className="text-gray-600  body-font">
      <div className="container-fluid text-center row py-24 mx-auto">
        <div className='w-full'>
          <h2 className='text-center capitalize text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-5'>
            Manual dos <span className='underline'>convidados</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-3">
          
          <div className="m-2 grid justify-items-center w-auto">
            <a className="block relative overflow-hidden">
              <Image alt="ecommerce" width={64} height={64} className="object-fit object-center block" src="/clock_icon.svg" />
            </a>
            <div className="mt-2">
              <h2 className="mt-1 text-gray-700 title-font text-md font-black">Pontualidade</h2>
              <p className="mt-1 text-sm font-bold">Seja pontual!</p>
              <p className="mt-1 text-sm font-thin text-wrap">Quem se atrasa é a noiva!</p>
            </div>
          </div>

          <div className="m-2 grid justify-items-center w-auto">
            <a className="block relative overflow-hidden">
              <Image alt="ecommerce" width={64} height={64} className="object-fit object-center block" src="/clock_icon.svg" />
            </a>
            <div className="mt-2">
              <h2 className="mt-1 text-gray-700 title-font text-md font-black">Pontualidade</h2>
              <p className="mt-1 text-sm font-bold">Seja pontual!</p>
              <p className="mt-1 text-sm font-thin text-wrap">Quem se atrasa é a noiva!</p>
            </div>
          </div>
          
          <div className="m-2 grid justify-items-center w-auto">
            <a className="block relative overflow-hidden">
              <Image alt="ecommerce" width={64} height={64} className="object-fit object-center block" src="/clock_icon.svg" />
            </a>
            <div className="mt-2">
              <h2 className="mt-1 text-gray-700 title-font text-md font-black">Pontualidade</h2>
              <p className="mt-1 text-sm font-bold">Seja pontual!</p>
              <p className="mt-1 text-sm font-thin text-wrap">Quem se atrasa é a noiva!</p>
            </div>
          </div>
          
     

        </div>
      </div>
    </section>
  )
}

export default Features