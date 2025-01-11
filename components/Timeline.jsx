"use client";

import React, { useState } from "react";
import Image from "next/image";

const Timeline = () => {
    const timelineItems = [
        { imgSrc: "/lt01.jpeg", caption: "Onde tudo começou", date: "01 Jan 2023" },
        { imgSrc: "/lt02.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
        { imgSrc: "/lt03.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
        { imgSrc: "/lt04.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
        { imgSrc: "/lt05.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
        { imgSrc: "/lt06.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
        { imgSrc: "/lt07.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
        { imgSrc: "/lt08.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
        { imgSrc: "/lt09.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
        { imgSrc: "/lt10.jpeg", caption: "Item 1 - Legenda", date: "Jan 2023" },
      ];
    
      return (
        <section className="w-full py-10">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Nossa evolução</h2>
            <div className="relative">
              {/* Linha central da timeline */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px bg-gray-0 h-full"></div>
    
              {/* Itens da timeline */}
              <div className="space-y-5 ">
                {timelineItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex ${index % 2 === 0 ? "flex-row-reverse" : "flex-row"} items-center`}
                  >
                    {/* Imagem do item */}
                    <div className="mx-2 rounded-full overflow-hidden bg-white shadow-lg">
                      <Image
                        src={item.imgSrc}
                        alt={`Image ${index + 1}`}
                        width={100}
                        height={100}
                        objectFit="cover"
                      />
                    </div>
                    {/* Descrição e data */}
                    <div
                      className={`ml-6 text-lg ${
                        index % 2 === 0 ? "text-right" : "text-left"
                      }`}
                    >
                      <p className="text-sm text-gray-500">{item.date}</p>
                      <p className="text-xl font-medium text-gray-800">{item.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    };

export default Timeline;
