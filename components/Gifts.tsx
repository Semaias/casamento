"use client";

import React, { useState } from "react";

const Gifts = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const handleToggle = (section) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const sections = {
    cozinha: [
      {
        id: 1,
        title: "Geladeira",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 2,
        title: "Fogão",
        description: "Pra cozinhar aquele rango especial",
        link: "https://www.magazineluiza.com.br/fogao-5-bocas-brastemp/p/fd4h6f47ea/et/foga/",
      },
      {
        id: 2,
        title: "Fogão",
        description: "Pra cozinhar aquele rango especial",
        link: "https://www.magazineluiza.com.br/fogao-5-bocas-brastemp/p/fd4h6f47ea/et/foga/",
      },
    ],
    quarto: [
      {
        id: 1,
        title: "Cama",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/cama-box/p/hb82878gcd/et/cama/",
      },
      {
        id: 2,
        title: "Guarda-roupa",
        description: "Pra guardar tudo organizadinho",
        link: "https://www.magazineluiza.com.br/guarda-roupa/p/fd4h6f47ea/et/guar/",
      },
    ],
    sala: [
      {
        id: 1,
        title: "Televisão",
        description: "Pra assistir os doramas com qualidade",
        link: "https://www.magazineluiza.com.br/tv/p/hb82878gcd/et/tv/",
      },
      {
        id: 2,
        title: "Sofá",
        description: "Pra relaxar enquanto assiste TV",
        link: "https://www.magazineluiza.com.br/sofa/p/fd4h6f47ea/et/sofa/",
      },
    ],
    banheiro: [
      {
        id: 1,
        title: "toalha",
        description: "Pra assistir os doramas com qualidade",
        link: "https://www.magazineluiza.com.br/tv/p/hb82878gcd/et/tv/",
      },
      {
        id: 2,
        title: "toalha",
        description: "Pra relaxar enquanto assiste TV",
        link: "https://www.magazineluiza.com.br/sofa/p/fd4h6f47ea/et/sofa/",
      },
    ],
    Limpeza: [
      {
        id: 1,
        title: "Televisão",

        description: "Pra assistir os doramas com qualidade",
        link: "https://www.magazineluiza.com.br/tv/p/hb82878gcd/et/tv/",
      },
      {
        id: 2,
        title: "Sofá",
        description: "Pra relaxar enquanto assiste TV",
        link: "https://www.magazineluiza.com.br/sofa/p/fd4h6f47ea/et/sofa/",
      },
    ],
  };

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto xl:w-8/12 sm:w-11/12 md:w-8/12 lg:w-8/12 px-5">
        <h1 className="text-3xl font-bold text-center mb-8">Lista de Presentes</h1>
        <div
          id="accordion-flush"
          data-accordion="collapse"
          data-active-classes="bg-white dark:bg-gray-900 text-gray-900"
          data-inactive-classes="text-gray-500"
        >
          {Object.entries(sections).map(([sectionName, items], index) => (
            <div key={index}>
              <h2 id={`accordion-flush-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-4 font-bold text-lg text-gray-500 border-b border-gray-200"
                  onClick={() => handleToggle(sectionName)}
                  aria-expanded={openAccordion === sectionName}
                  aria-controls={`accordion-flush-body-${index}`}
                >
                  <span>
                    {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
                  </span>
                  <svg
                    data-accordion-icon
                    className={`w-3 h-3 transition-transform ${openAccordion === sectionName ? "rotate-180" : ""
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5 5 1 1 5"
                    />
                  </svg>
                </button>
              </h2>
              <div
                id={`accordion-flush-body-${index}`}
                className={`${openAccordion === sectionName ? "block" : "hidden"}`}
                aria-labelledby={`accordion-flush-heading-${index}`}
              >
                <div className="py-5 border-b border-gray-200 ">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="mb-1 px-4 py-1 bg-white rounded-lg shadow"
                    >
                      <div className="flex items-center justify-between content-center">
                        <h3 className="font-semibold">
                          {item.title}
                        </h3>
                        {/* <p className="text-gray-500">
                          {item.description}
                        </p> */}
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex text-white text-center bg-[#87B295] rounded p-3 items-center hover:underline"
                        >
                          Quero te presentear
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gifts;




// <h2 className='text-3xl py-5 text-center'>
//   Lista de <span className='underline'>Presentes</span>
// </h2>



// <div className="px-5 py-5 mx-auto">
//   <h3 className='text-xl bold text-center mb-5'>Cozinha</h3>
//   <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2">
//     {cozinha.map((gift) => (
//       <a
//         key={gift.id}
//         href={gift.link}
//         target='_blank'
//         className=" bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
//       >
//         <div className="relative h-20 items-center justify-center overflow-hidden">
//           <Image
//             src={gift.image}
//             alt={gift.title}
//             width={100}
//             height={100}
//             className="object-center"
//           />
//         </div>
//         <div className="mt-4 text-center">
//           <h3 className="text-gray-700 text-sm font-medium">{gift.title}</h3>
//           <p className="text-gray-500 text-xs mt-2">{gift.description}</p>
//         </div>
//       </a>
//     ))}
//   </div>
// </div>

// <div className="px-5 py-5 mx-auto">
//   <h3 className='text-xl bold text-center mb-5'>Sala</h3>
//   <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2">
//     {sala.map((gift) => (
//       <a
//         key={gift.id}
//         href={gift.link}
//         target='_blank'
//         className=" bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
//       >
//         <div className="relative h-20 items-center justify-center overflow-hidden">
//           <Image
//             src={gift.image}
//             alt={gift.title}
//             width={100}
//             height={100}
//             className="object-center"
//           />
//         </div>
//         <div className="mt-4 text-center">
//           <h3 className="text-gray-700 text-sm font-medium">{gift.title}</h3>
//           <p className="text-gray-500 text-xs mt-2">{gift.description}</p>
//         </div>
//       </a>
//     ))}
//   </div>
// </div>