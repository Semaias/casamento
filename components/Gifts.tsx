"use client";

import React, { useState } from "react";
import Link from 'next/link';

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
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AArm%C3%A1rio%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 2,
        title: "Mesa de Jantar",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AMesa%20de%20Jantar%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 3,
        title: "Airfryer",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AAirfryer%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 4,
        title: "Batedeira",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ABatedeira%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 5,
        title: "Chaleira elétrica",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AChaleira%20el%C3%A9trica%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 6,
        title: "Cafeteira",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ACafeteira%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 7,
        title: "Liquidificador",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ALiquidificador%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 8,
        title: "Microondas",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AMicroondas%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 9,
        title: "Mix/ multiprocessador",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AMix/%20multiprocessador%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 10,
        title: "Sanduicheira",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ASanduicheira%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 11,
        title: "Panela de pressão",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2APanela%20de%20press%C3%A3o%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 12,
        title: "Forno elétrico",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AForno%20el%C3%A9trico%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 13,
        title: "Faqueiro",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AFaqueiro%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 14,
        title: "Fruteira",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AFruteira%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 15,
        title: "Escorredor de pia",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AEscorredor%20de%20pia%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 16,
        title: "Kit pano de prato",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AKit%20pano%20de%20prato%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 17,
        title: "Aparelho de jantar",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AAparelho%20de%20jantar%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 18,
        title: "Kit frigideiras",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AKit%20frigideiras%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 19,
        title: "Kit assadeiras",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AKit%20assadeiras%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 20,
        title: "Jogo de canecas",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AJogo%20de%20canecas%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 21,
        title: "Jogo de copos",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AJogo%20de%20copos%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 22,
        title: "Kit porta tempero",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AKit%20porta%20tempero%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 23,
        title: "Tigelas",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ATigelas%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 24,
        title: "Jogo americano",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AJogo%20americano%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 25,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2Auma%20contribui%C3%A7%C3%A3o%20via%20PIX%2A.%20Como%20posso%20fazer%3F",
      },
    ],


    quarto: [
      {
        id: 1,
        title: "Cabide",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ACabide%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 2,
        title: "Jogo de cama",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AJogo%20de%20cama%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 3,
        title: "Ventilador",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AVentilador%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 4,
        title: "Guarda-roupa",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AGuarda-roupa%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 5,
        title: "Kit cobre leito",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AKit%20cobre%20leito%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 6,
        title: "Tapete",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ATapete%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 7,
        title: "Abajur",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AAbajur%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 8,
        title: "Criado mudo",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ACriado%20mudo%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 9,
        title: "Travesseiro",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ATravesseiro%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 10,
        title: "Ferro de passar",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AFerro%20de%20passar%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 11,
        title: "Tábua de passar",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AT%C3%A1bua%20de%20passar%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 12,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2Auma%20contribui%C3%A7%C3%A3o%20via%20PIX%2A.%20Como%20posso%20fazer%3F",
      },
    ],

    sala: [
      {
        id: 1,
        title: "Sofá",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ASof%C3%A1%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 2,
        title: "Televisão",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ATelevis%C3%A3o%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 3,
        title: "Painel/hack para TV",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2APainel%2Fhack%20para%20TV%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 4,
        title: "Mesa de centro",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AMesa%20de%20centro%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 5,
        title: "Cortina",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ACortina%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 6,
        title: "Ventilador",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AVentilador%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 7,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2Auma%20contribui%C3%A7%C3%A3o%20via%20PIX%2A.%20Como%20posso%20fazer%3F",
      },
    ],

    banheiro: [
      {
        id: 1,
        title: "Cesto de roupa",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ACesto%20de%20roupa%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 2,
        title: "Kit acessórios de banheiro",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AKit%20acess%C3%B3rios%20de%20banheiro%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 3,
        title: "Kit toalha de banho+rosto",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AKit%20toalha%20de%20banho%2Brosto%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 4,
        title: "Roupão",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ARoup%C3%A3o%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 5,
        title: "Tapete",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ATapete%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 6,
        title: "Chuveiro",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AChuveiro%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 7,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2Auma%20contribui%C3%A7%C3%A3o%20via%20PIX%2A.%20Como%20posso%20fazer%3F",
      },
    ],

    lavanderia: [
      {
        id: 1,
        title: "Moop",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AMoop%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 2,
        title: "Kit baldes/ bacias retráteis",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AKit%20baldes%2F%20bacias%20retr%C3%A1teis%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 3,
        title: "Tanquinho",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2ATanquinho%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 4,
        title: "Aspirador de pó",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AAspirador%20de%20p%C3%B3%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 5,
        title: "Furadeira",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AFuradeira%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 6,
        title: "Parafusadeira",
        description: "Tá baratinho, pow",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2AParafusadeira%2A.%20Como%20posso%20fazer%3F",
      },
      {
        id: 7,
        title: "Quero contribuir com PIX",
        description: "Ajude diretamente!",
        link: "https://wa.me/558491607617?text=Ol%C3%A1,%20parab%C3%A9ns%20pelo%20noivado!%20Gostaria%20de%20te%20presentear%20com%20%2Auma%20contribui%C3%A7%C3%A3o%20via%20PIX%2A.%20Como%20posso%20fazer%3F",
      },
    ],

  };

  return (
    <section id="lista-de-presentes" className="text-[#394C40] body-font pt-20">
      <div className="container mx-auto xl:w-8/12 sm:w-11/12 px-5">
        <h1 className="text-3xl text-[#536E5C] font-bold text-center mb-8">
          Lista de Presentes
        </h1>
        <div id="accordion-flush" data-accordion="collapse">
          {Object.entries(sections).map(([sectionName, items], index) => (
            <div key={sectionName}>
              <Link href={`#lista-de-presentes`} >
                <h2 id={`accordion-flush-heading-${index}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full py-4 font-bold text-xl text-[#536E5C] border-b border-[#536E5CBB]"
                    onClick={() => handleToggle(sectionName as keyof typeof sections)}
                    aria-expanded={openAccordion === sectionName}
                    aria-controls={`accordion-flush-body-${index}`}
                  >
                    <span>
                      {sectionName.charAt(0).toUpperCase() + sectionName.slice(1)}
                    </span>
                    <svg
                      data-accordion-icon
                      className={`w-3 h-3 transition-transform	 ${openAccordion === sectionName ? "rotate-180" : ""
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
              </Link>
              <div
                id={`accordion-flush-body-${index}`}
                className={`${openAccordion === sectionName ? "block" : "hidden"
                  }`}
                aria-labelledby={`accordion-flush-heading-${index}`}
              >
                <div className="py-5 border-b border-[#8dba9cbb]">
                  <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="mb-1 px-4 py-2 bg-white rounded-lg shadow"
                      >
                        <div
                          className="grid grid-cols-12 items-center justify-between sm:text-[10pt] md:text-[12pt] lg:text-[16pt] xl:text-[24pt]"
                        >
                          <h3 className="text-sm font-bold text-[#87B295] col-span-7">{item.title}</h3>
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium inline-flex col-span-5 text-white text-center justify-center bg-[#87B295] rounded p-3 items-center hover:underline"
                          >
                            Quero te presentear
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
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
