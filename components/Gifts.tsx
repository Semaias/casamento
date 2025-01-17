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
        title: "Armário",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20um%20%2AArm%C3%A1rio%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 2,
        title: "Mesa de Jantar",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 3,
        title: "Airfryer",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 4,
        title: "Batedeira",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 5,
        title: "Chaleira elétrica",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 6,
        title: "Cafeteira",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 7,
        title: "Liquidificador",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 8,
        title: "Microondas",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 9,
        title: "Mix/ multiprocessador",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 10,
        title: "Sanduicheira",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 11,
        title: "Panela de pressão",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 12,
        title: "Forno elétrico",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 13,
        title: "Faqueiro",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 14,
        title: "Fruteira",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 15,
        title: "Escorredor de pia",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 16,
        title: "Kit pano de prato",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 17,
        title: "Aparelho de jantar",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 18,
        title: "Kit frigideiras",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 19,
        title: "Kit assadeiras",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 20,
        title: "Jogo de canecas",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 21,
        title: "Jogo de copos",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 22,
        title: "Kit porta tempero",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 23,
        title: "Tigelas",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 24,
        title: "Jogo americano",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
      {
        id: 25,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/",
      },
    ],
    quarto: [
      {
        id: 1,
        title: "Cabide",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/cabide/p/hb82878gcd/",
      },
      {
        id: 2,
        title: "Jogo de cama",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/jogo-de-cama/p/hb82878gcd/",
      },
      {
        id: 3,
        title: "Ventilador",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/ventilador/p/hb82878gcd/",
      },
      {
        id: 4,
        title: "Guarda-roupa",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/guarda-roupa/p/hb82878gcd/",
      },
      {
        id: 5,
        title: "Kit cobre leito",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/kit-cobre-leito/p/hb82878gcd/",
      },
      {
        id: 6,
        title: "Tapete",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/tapete/p/hb82878gcd/",
      },
      {
        id: 7,
        title: "Abajur",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/abajur/p/hb82878gcd/",
      },
      {
        id: 8,
        title: "Criado mudo",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/criado-mudo/p/hb82878gcd/",
      },
      {
        id: 9,
        title: "Travesseiro",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/travesseiro/p/hb82878gcd/",
      },
      {
        id: 10,
        title: "Ferro de passar",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/ferro-de-passar/p/hb82878gcd/",
      },
      {
        id: 11,
        title: "Tábua de passar",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/tabua-de-passar/p/hb82878gcd/",
      },
      {
        id: 12,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://www.magazineluiza.com.br/contribua-com-pix/p/hb82878gcd/",
      },
    ],
    sala: [
      {
        id: 1,
        title: "Sofá",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/sofa/p/hb82878gcd/",
      },
      {
        id: 2,
        title: "Televisão",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/televisao/p/hb82878gcd/",
      },
      {
        id: 3,
        title: "Painel/hack para TV",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/painel-para-tv/p/hb82878gcd/",
      },
      {
        id: 4,
        title: "Mesa de centro",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/mesa-de-centro/p/hb82878gcd/",
      },
      {
        id: 5,
        title: "Cortina",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/cortina/p/hb82878gcd/",
      },
      {
        id: 6,
        title: "Ventilador",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/ventilador/p/hb82878gcd/",
      },
      {
        id: 7,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://www.magazineluiza.com.br/contribua-com-pix/p/hb82878gcd/",
      },
    ],
    banheiro: [
      {
        id: 1,
        title: "Cesto de roupa",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/cesto-de-roupa/p/hb82878gcd/",
      },
      {
        id: 2,
        title: "Kit acessórios de banheiro",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/kit-acessorios-banheiro/p/hb82878gcd/",
      },
      {
        id: 3,
        title: "Kit toalha de banho+rosto",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/kit-toalha-banho-rosto/p/hb82878gcd/",
      },
      {
        id: 4,
        title: "Roupão",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/roupao/p/hb82878gcd/",
      },
      {
        id: 5,
        title: "Tapete",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/tapete/p/hb82878gcd/",
      },
      {
        id: 6,
        title: "Chuveiro",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/chuveiro/p/hb82878gcd/",
      },
      {
        id: 7,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://www.magazineluiza.com.br/contribua-com-pix/p/hb82878gcd/",
      },
    ],
    lavanderia: [
      {
        id: 1,
        title: "Moop",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/moop/p/hb82878gcd/",
      },
      {
        id: 2,
        title: "Kit baldes/ bacias retráteis",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/kit-baldes-bacias-retrateis/p/hb82878gcd/",
      },
      {
        id: 3,
        title: "Tanquinho",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/tanquinho/p/hb82878gcd/",
      },
      {
        id: 4,
        title: "Aspirador de pó",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/aspirador-de-po/p/hb82878gcd/",
      },
      {
        id: 5,
        title: "Furadeira",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/furadeira/p/hb82878gcd/",
      },
      {
        id: 6,
        title: "Parafusadeira",
        description: "Tá baratinho, pow",
        link: "https://www.magazineluiza.com.br/parafusadeira/p/hb82878gcd/",
      },
      {
        id: 7,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://www.magazineluiza.com.br/contribua-com-pix/p/hb82878gcd/",
      },
    ],
  };

  return (
    <section className="text-[#394C40] body-font py-12">
      <div className="container mx-auto xl:w-8/12 sm:w-11/12 px-5">
        <h1 className="text-3xl text-[#536E5C] font-bold text-center mb-8">Lista de Presentes</h1>
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
                      className="mb-1 px-4 py-2 bg-white rounded-lg shadow"
                    >
                      <div 
                      className="grid grid-cols-12 items-center justify-between
                      sm:text-[10pt] md:text-[12pt] lg:text-[16pt] xl:text-[24pt]">
                        <h3
                          className="font-semibold text-pretty col-span-7">
                          {item.title}
                        </h3>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex col-span-5 text-white text-center bg-[#87B295] rounded p-3 items-center hover:underline"
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
