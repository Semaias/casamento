"use client";

import React from "react";
import Image from "next/image";

const Timeline = () => {
  const timelineItems = [
    {
      imgSrc: "/lt01.jpeg",
      caption: "Onde tudo oficialmente começou",
      date: "28 Dez 2022",
      description: "Um dia de nervosismo para ambos os lados, mas o amor a tudo superou.",
      icon: null,
    },
    {
      imgSrc: "/lt02.jpeg",
      caption: "Primeira aliança",
      date: "01 Jan 2023",
      description: "Oficialmente namorados. O início da nossa história.",
      icon: null,
    },
    {
      imgSrc: "/lt03.jpeg",
      caption: "Item 3 - Descrição",
      date: "01 Jan 2023",
      description: "ffasdfonasdçjoifnsadjifna sdçlkfjnsalkdjfnasl dkfjnsaldkfjnsadlkjffn.",
      icon: null
    },
    {
      imgSrc: "/lt04.jpeg",
      caption: "Novo marco",
      date: "01 Jan 2023",
      description: "sdpifmasçodkfmças ldkfmçasldkasdaçsljdmaolsçk djnmalsjdmnlaskjdnmsakljdm.",
      icon: null
    },
    {
      imgSrc: "/lt04.jpeg",
      caption: "Novo marco",
      date: "01 Jan 2023",
      description: "sdpifmasçodkfmças ldkfmçasldkasdaçsljdmaolsçk djnmalsjdmnlaskjdnmsakljdm.",
      icon: null
    },
    {
      imgSrc: "/lt04.jpeg",
      caption: "Novo marco",
      date: "01 Jan 2023",
      description: "sdpifmasçodkfmças ldkfmçasldkasdaçsljdmaolsçk djnmalsjdmnlaskjdnmsakljdm.",
      icon: null
    },
  ];

  return (
    <section className="text-gray-600 body-font">

      <h2 className="text-center text-2xl font-bold -mt-10">Nossa linha do tempo</h2>

      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`flex relative ${index === timelineItems.length - 1 ? "pb-5" : "pb-10"
              } sm:items-center md:w-2/3 mx-auto`}
          >
            {/* Peste da linha que vai em pé */}
            <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
            </div>

            {/* Porcaria do número que marca cada passo */}
            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">
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
                <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">
                  {item.caption}
                </h2>
                <p className="leading-relaxed">{item.date}</p>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
