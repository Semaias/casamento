import React from 'react';
import Image from 'next/image';

const Gifts = () => {
  const gifts = [
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {gifts.map((gift) => (
            <a
              key={gift.id}
              href={gift.link}
              target='_blank'
              className=" bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <div className="relative h-32 items-center justify-center overflow-hidden">
                <Image
                  src={gift.image}
                  alt={gift.title}
                  width={100}
                  height={100}
                  className="object-center"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-gray-700 text-sm font-medium">{gift.title}</h3>
                <p className="text-gray-500 text-xs mt-2">{gift.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gifts;
