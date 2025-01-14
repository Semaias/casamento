"use client"; // Adicione esta linha no início do arquivo

import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<{ days: number, hours: number, minutes: number, seconds: number }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Data alvo (21 de junho de 2025)
  const targetDate = new Date('2025-06-21T16:00:00');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section className="relative flex items-center justify-center h-[80vh] bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/altar.jpg')" }}>

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">SAVE THE DATE</h1>
        <h2 className="text-2xl md:text-4xl mb-8">Nosso grande dia está chegando</h2>

        {/* Contagem regressiva */}
        <div className="flex justify-center space-x-4 text-lg md:text-2xl font-semibold">
          <div>
            <span className="block text-4xl md:text-6xl">{timeLeft.days}</span>
            <span>Dias</span>
          </div>
          <div>
            <span className="block text-4xl md:text-6xl">{timeLeft.hours}</span>
            <span>Horas</span>
          </div>
          <div>
            <span className="block text-4xl md:text-6xl">{timeLeft.minutes}</span>
            <span>Minutos</span>
          </div>
          <div>
            <span className="block text-4xl md:text-6xl">{timeLeft.seconds}</span>
            <span>Segundos</span>
          </div>
        </div>
      </div>
      
    </section>

  );
};

export default Hero;
