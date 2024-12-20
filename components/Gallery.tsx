import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
const Gallery = () => {
  return (
    <section className="text-gray-600 body-font" id='gallery'>
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Conheça mais um pouco sobre nós</h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Temos uma longa história e queremos que aproveitem cada minuto ao nosso lado</p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" width={500} height={300} className="w-full object-cover h-full object-center block" src="/t1.jpeg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" width={501} height={301} className="w-full object-cover h-full object-center block" src="/t2.jpeg"/>
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image alt="gallery" width={600} height={360} className="w-full h-full object-cover object-center block" src="/t3.jpeg"/>
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image alt="gallery" width={601} height={361} className="w-full h-full object-cover object-center block" src="/t4.jpeg"/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" width={502} height={302} className="w-full object-cover h-full object-center block" src="/js.jpg"/>
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <Image alt="gallery" width={503} height={303} className="w-full object-cover h-full object-center block" src="/js.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery