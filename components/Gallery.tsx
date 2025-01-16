"use client";

import Image from "next/image";

const Gallery = () => {
  return (
    <section className="text-[#394C40]  body-font">
      <div className="container px-5 lg:px-52 md:px-40 mx-auto">
        <div className="flex flex-col w-full text-justify mb-20">
          <h2 className="sm:text-3xl text-2xl font-black text-center title-font mb-4 text-[#8DBA9C]">
            Nossa história
          </h2>

          <p className="lg:w-2/3 mx-auto indent-6 leading-relaxed p-1 text-base">
            Olá, somos Janielle e Semaias e VAMOS CASAAARR!!! Muita coisa aconteceu até esse dia chegar, então vamos resumir um pouco.</p>

          <div className="flex my-5 relative ">
            <Image width={100} height={100} alt="gallery" className="relative inset-0 w-full h-full object-cover object-center" src="/ft01.jpeg" />
          </div>

          <p className="lg:w-2/3 mx-auto indent-6 leading-relaxed p-1 text-base">
            <span className="font-bold">Próximos em morada, distantes em destino:</span> desde de criança moramos a 50 metros um do outro. Não sabemos exatamente quando nos conhecemos, mas sabemos que durante a infância estudamos nas mesmas escolas e em diferentes turnos. Ao fim do ensino fundamental seguimos rumos acadêmicos diferentes: Sesi Natal - IFRN Campus Canguaretama.</p>

          <div className="flex my-5 relative">
            <Image width={100} height={100} alt="gallery" className="relative inset-0 w-full h-full object-cover object-center" src="/ft02.jpeg" />
          </div>

          <p className="lg:w-2/3 mx-auto indent-6 leading-relaxed p-1 text-base">
            Continuamos morando próximos, quase vizinhos, mas foram mais de 4 anos sem se encontrar na vida. Eis que a vida nos aproxima novamente, e dessa vez é pra valer. Conversas vêm e vão, os dias e as noites são curtas para tanto assunto. A intimidade e a proximidade afetiva aumentam e o amor se torna a expressão mais pura do que ambos sentem.</p>

          <div className="flex my-5 relative">
            <Image width={100} height={100} alt="gallery" className="relative inset-0 w-full h-full object-cover object-center" src="/ft03.jpeg" />
          </div>

          <p className="lg:w-2/3 mx-auto indent-6 leading-relaxed p-1 text-base">
            Passou um ano nesse ritmo até que o grande dia chega: a defesa de um TCC, 15 de dezembro de 2022. Janielle não esperava, mas Semaias foi de surpresa prestigiar o acontecimento. Cada reação, cada sensação, cada abraço, cada sorriso, cada mordida no lanche comemorativo foi especial. Foi o último golpe no coração e Janielle não pôde mais resistir.</p>

          <div className="flex my-5 relative">
            <Image width={100} height={100} alt="gallery" className="relative inset-0 w-full h-full object-cover object-center" src="/ft04.jpeg" />
          </div>

          <p className="lg:w-2/3 mx-auto indent-6 leading-relaxed p-1 text-base">
            O amor venceu e vocês estão prestes e vivenciar o ápice dessa união.</p>

          <div className="flex my-5 relative">
            <Image width={100} height={100} alt="gallery" className="relative inset-0 w-full h-full object-cover object-center" src="/ft05.jpeg" />
          </div>

          <p className="lg:w-2/3 mx-auto indent-6 leading-relaxed text-center p-4 text-sm">
            E Deus disse: <span className="italic">“por isso o homem deixa o seu pai e a sua mãe para se unir com a sua mulher, e os dois se tornam uma só pessoa.” Assim já não são duas pessoas, mas uma só. Portanto, que ninguém separe o que Deus uniu.
              </span> <br /> <span className="font-bold">Mateus 19:6</span></p>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
