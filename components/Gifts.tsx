import React from 'react';
import Image from 'next/image';

const Gifts = () => {
  const cozinha = [
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
    { id: 1, title: 'Geladeira', description: 'Tá baratinho, pow', image: '/fridge.png', link: 'https://www.magazineluiza.com.br/geladeira-degelo-pratico-amarela-01-eletrolux/p/hb82878gcd/ed/refr/' },
  ];

  const sala = [
    { id: 1, title: 'Televisão', description: 'Pra assistir os doramas com qualidade', image: '/tv.png', link: 'https://www.magazineluiza.com.br/samsung-ai-big-tv-85-neo-qled-8k-85qn900d-2024-processador-com-ai-upscaling-8k-ai-mini-led-som-em-movimento-pro-alexa-built-in/p/fd4h6f47ea/et/tv8k/' },
    { id: 1, title: 'Televisão', description: 'Pra assistir os doramas com qualidade', image: '/tv.png', link: 'https://www.magazineluiza.com.br/samsung-ai-big-tv-85-neo-qled-8k-85qn900d-2024-processador-com-ai-upscaling-8k-ai-mini-led-som-em-movimento-pro-alexa-built-in/p/fd4h6f47ea/et/tv8k/' },
    { id: 1, title: 'Televisão', description: 'Pra assistir os doramas com qualidade', image: '/tv.png', link: 'https://www.magazineluiza.com.br/samsung-ai-big-tv-85-neo-qled-8k-85qn900d-2024-processador-com-ai-upscaling-8k-ai-mini-led-som-em-movimento-pro-alexa-built-in/p/fd4h6f47ea/et/tv8k/' },
    { id: 1, title: 'Televisão', description: 'Pra assistir os doramas com qualidade', image: '/tv.png', link: 'https://www.magazineluiza.com.br/samsung-ai-big-tv-85-neo-qled-8k-85qn900d-2024-processador-com-ai-upscaling-8k-ai-mini-led-som-em-movimento-pro-alexa-built-in/p/fd4h6f47ea/et/tv8k/' },
    { id: 1, title: 'Televisão', description: 'Pra assistir os doramas com qualidade', image: '/tv.png', link: 'https://www.magazineluiza.com.br/samsung-ai-big-tv-85-neo-qled-8k-85qn900d-2024-processador-com-ai-upscaling-8k-ai-mini-led-som-em-movimento-pro-alexa-built-in/p/fd4h6f47ea/et/tv8k/' },
    { id: 1, title: 'Televisão', description: 'Pra assistir os doramas com qualidade', image: '/tv.png', link: 'https://www.magazineluiza.com.br/samsung-ai-big-tv-85-neo-qled-8k-85qn900d-2024-processador-com-ai-upscaling-8k-ai-mini-led-som-em-movimento-pro-alexa-built-in/p/fd4h6f47ea/et/tv8k/' },
  ];

  return (
    <section className="text-gray-600 body-font">
      <h2 className='text-3xl py-5 text-center'>Lista de <span className='underline'>Presentes</span></h2>
      
      <div className="px-5 py-5 mx-auto">
        <h3 className='text-xl bold text-center mb-5'>Cozinha</h3>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {cozinha.map((gift) => (
            <a
              key={gift.id}
              href={gift.link}
              target='_blank'
              className=" bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <div className="relative h-20 items-center justify-center overflow-hidden">
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

      <div className="px-5 py-5 mx-auto">
        <h3 className='text-xl bold text-center mb-5'>Sala</h3>
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {sala.map((gift) => (
            <a
              key={gift.id}
              href={gift.link}
              target='_blank'
              className=" bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <div className="relative h-20 items-center justify-center overflow-hidden">
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
