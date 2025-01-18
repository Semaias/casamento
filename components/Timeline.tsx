"use client";

import React from "react";
import Image from "next/image";

const Timeline = () => {
  const timelineItems = [
    {
      imgSrc: "/lt02.jpeg",
      caption: "Onde tudo oficialmente começou",
      date: "01 Jan 2023",
      description: "O primeiro passo aconteceu em uma noite linda, coberta por fogos que iluminavam nossos corações e nos presenteava com a primeira aliança, simbolizando o laço que Deus nos preparou.",
      icon: null,
    },
    {
      imgSrc: "/lt04.jpeg",
      caption: "Concretização de um novo caminho",
      date: "10 Abr 2023",
      description: "O início da carreira profissional, acompanhada de sorrisos orgulhosos e um amor que ofereceu suporte em todos momentos.",
      icon: null,
    },
    {
      imgSrc: "/lt06.jpeg",
      caption: "Bodas de Milagre ",
      date: "28 Dez 2023",
      description: "Primeiro ano compartilhando a vida. Recordar cada momento precioso, as risadas e os desafios nos fizeram mais fortes. Essa construção nos ofereceu uma base sólida para nosso relacionamento.",
      icon: null
    },
    {
      imgSrc: "/lt07.jpeg",
      caption: "O Pedido",
      date: "19 Mai 2024",
      description: "Dia inesquecível que marcou nossos corações com o segundo passo. A segunda aliança testemunha o nosso desejo de subir ao altar para realizarmos o propósito que o Senhor nos entregou.",
      icon: null
    },
    {
      imgSrc: "/lt09.jpeg",
      caption: "Bodas de Dedo-de-Moça",
      date: "28 Dec 2024",
      description: "Felizes por viver tudo que o Senhor nos proporcionou em mais um ano de relacionamento, e ansiosos para o ato que vem a ser o mais importante de nossas vidas.",
      icon: null
    },
    {
      imgSrc: "/lt10.jpeg",
      caption: "É 2025!!!",
      date: "01 Jan 2025",
      description: "A contagem regressiva começou. Aguardamos ansiosos o momento em que se juntarão a nós para celebrarmos nossa união com a bênção de Deus",
      icon: null
    },
  ];

  return (
    <section id="timeline" className="text-[#394C40] body-font -mt-20">

      <h2 className="text-3xl text-[#536E5C] font-bold text-center pt-20">Nossa linha do tempo</h2>

      <div className="container px-5 py-10 mx-auto flex flex-wrap">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`flex relative ${index === timelineItems.length - 1 ? "pb-5" : "pb-10"
              } sm:items-center md:w-2/3 mx-auto`}
          >
            {/* Peste da linha que vai em pé */}
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-[#87B295] pointer-events-none"></div>
            </div>

            {/* Porcaria do número que marca cada passo */}
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-[#87B295] text-white relative z-10 title-font font-medium text-sm">
              {index + 1}
            </div>

            {/* Maravilhindo conteúdo */}
            <div className="flex-grow sm:pl-12 flex flex-col sm:flex-row items-center sm:items-start">
              <div className="relative flex-shrink-0 w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center">
                {item.imgSrc ? (
                  <Image
                    src={item.imgSrc}
                    alt={item.caption}
                    fill
                    className="object-cover object-center rounded-full"
                  />
                ) : (
                  item.icon
                )}
              </div>
              <div className="sm:pl-6 text-center sm:text-left">
                <h2 className="font-bold title-font text-[#536E5C] mb-1 text-xl">
                  {item.caption}
                </h2>
                <p className="text-[#394C40] font-light leading-relaxed">{item.date}</p>
                <p className="text-[#394C40] mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
