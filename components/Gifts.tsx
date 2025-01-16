"use client";

import React, { useState } from "react";

const Gifts = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleToggle = (section: keyof typeof sections) => {
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
    ],
    quarto: [
      {
        id: 3,
        title: "Cama",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/cama-box/p/hb82878gcd/et/cama/",
      },
      {
        id: 4,
        title: "Guarda-roupa",
        description: "Pra guardar tudo organizadinho",
        link: "https://www.magazineluiza.com.br/guarda-roupa/p/fd4h6f47ea/et/guar/",
      },
    ],
    sala: [
      {
        id: 5,
        title: "Televisão",
        description: "Pra assistir os doramas com qualidade",
        link: "https://www.magazineluiza.com.br/tv/p/hb82878gcd/et/tv/",
      },
      {
        id: 6,
        title: "Sofá",
        description: "Pra relaxar enquanto assiste TV",
        link: "https://www.magazineluiza.com.br/sofa/p/fd4h6f47ea/et/sofa/",
      },
    ],
    banheiro: [
      {
        id: 7,
        title: "Toalha",
        description: "Pra se secar com estilo",
        link: "https://www.magazineluiza.com.br/toalha/p/hb82878gcd/et/toal/",
      },
      {
        id: 8,
        title: "Saboneteira",
        description: "Pra deixar tudo organizado",
        link: "https://www.magazineluiza.com.br/saboneteira/p/fd4h6f47ea/et/sabo/",
      },
    ],
    limpeza: [
      {
        id: 9,
        title: "Vassoura",
        description: "Pra deixar a casa limpinha",
        link: "https://www.magazineluiza.com.br/vassoura/p/hb82878gcd/et/limp/",
      },
      {
        id: 10,
        title: "Rodo",
        description: "Pra finalizar a limpeza",
        link: "https://www.magazineluiza.com.br/rodo/p/fd4h6f47ea/et/rodo/",
      },
    ],
  };

  return (
    <section className="text-gray-600 body-font py-12">
      <div className="container mx-auto xl:w-8/12 sm:w-11/12 px-5">
        <h1 className="text-3xl font-bold text-center mb-8">Lista de Presentes</h1>
        <div id="accordion-flush" data-accordion="collapse">
          {Object.entries(sections).map(([sectionName, items], index) => (
            <div key={sectionName}>
              <h2 id={`accordion-flush-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full py-4 font-bold text-lg text-gray-500 border-b border-gray-200"
                  onClick={() => handleToggle(sectionName as keyof typeof sections)}
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
                <div className="py-5 border-b border-gray-200">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="mb-1 px-4 py-1 bg-white rounded-lg shadow"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{item.title}</h3>
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
