"use client";

import { useState } from "react";
import Image from "next/image";

const Gallery = () => {
  // Array de imagens locais
  const images = Array.from({ length: 9 }, (_, i) => ({
    id: i + 1,
    url: `/lt0${i + 1}.jpeg`,
  }));

  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setCurrentIndex(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Photo Gallery</h1>

      {/* Grid da Galeria */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <div
            key={image.id}
            className="relative cursor-pointer"
            onClick={() => openModal(index)}
          >
            <Image
              src={image.url}
              alt={`Image ${image.id}`}
              width={200}
              height={150}
              className="rounded-lg hover:opacity-80 transition"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Imagem Atual */}
            <Image
              src={images[currentIndex].url}
              alt={`Image ${images[currentIndex].id}`}
              layout="contain"
              width={800}
              height={600}
              className="rounded-lg"
            />

            {/* Botão Fechar */}
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
              onClick={closeModal}
            >
              ×
            </button>

            {/* Botão Anterior */}
            <button
              className="absolute left-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Botão Próximo */}
            <button
              className="absolute right-4 text-white text-3xl font-bold bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
              onClick={nextImage}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
