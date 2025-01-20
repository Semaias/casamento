"use client";

import Image from "next/image";

const Gallery = () => {
  return (
    <section className="text-[#394C40] pt-20 body-font">
      <div className="container px-5 lg:px-52 md:px-40 mx-auto">
        <div className="w-full text-justify mb-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl text-[#536E5C] font-bold">
              Nossa história
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-y-5 lg:gap-x-10 mb-10">
            <p className="lg:w-1/2 indent-6 leading-relaxed text-base">
              Olá, somos Janielle e Semaias e VAMOS CASAAARR!!! Muita coisa
              aconteceu até esse dia chegar, então vamos resumir um pouco.
            </p>
            <Image
              width={500}
              height={500}
              alt="Nossa história 1"
              className="w-full lg:w-1/2 h-auto lg:max-h-72 object-cover rounded"
              src="/ft01.jpeg"
            />
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center gap-y-5 lg:gap-x-10 mb-10">
            <p className="lg:w-1/2 indent-6 leading-relaxed text-base">
              <span className="font-bold">
                Próximos em morada, distantes em destino:
              </span>{" "}
              desde de criança moramos a 50 metros um do outro. Não sabemos
              exatamente quando nos conhecemos, mas sabemos que durante a
              infância estudamos nas mesmas escolas e em diferentes turnos. Ao
              fim do ensino fundamental seguimos rumos acadêmicos diferentes:
              SESI Natal - IFRN Campus Canguaretama.
            </p>
            <Image
              width={500}
              height={500}
              alt="Nossa história 2"
              className="w-full lg:w-1/2 h-auto lg:max-h-72 object-cover rounded"
              src="/ft02.jpeg"
            />
          </div>

          <div className="flex flex-col lg:flex-row items-center  gap-y-5 lg:gap-x-10 mb-10">
            <p className="lg:w-1/2 indent-6 leading-relaxed text-base">
              Continuamos morando próximos, quase vizinhos, mas foram mais de 4
              anos sem se encontrar na vida. Eis que a vida nos aproxima
              novamente, e dessa vez é pra valer. Conversas vêm e vão, os dias e
              as noites são curtas para tanto assunto. A intimidade e a
              proximidade afetiva aumentam e o amor se torna a expressão mais
              pura do que ambos sentem.
            </p>
            <Image
              width={500}
              height={500}
              alt="Nossa história 3"
              className="w-full lg:w-1/2 h-auto lg:max-h-72 object-cover rounded"
              src="/ft03.jpeg"
            />
          </div>

          <div className="flex flex-col lg:flex-row-reverse items-center  gap-y-5 lg:gap-x-10 mb-10">
            <p className="lg:w-1/2 indent-6 leading-relaxed text-base">
              Passou um ano nesse ritmo até que o grande dia chega: a defesa de
              um TCC, 15 de dezembro de 2022. Janielle não esperava, mas Semaias
              foi de surpresa prestigiar o acontecimento. Cada reação, cada
              sensação, cada abraço, cada sorriso, cada mordida no lanche
              comemorativo foi especial. Foi o último golpe no coração e
              Janielle não pôde mais resistir.
            </p>
            <Image
              width={500}
              height={500}
              alt="Nossa história 4"
              className="w-full lg:w-1/2 h-auto lg:max-h-72 object-cover rounded"
              src="/ft04.jpeg"
            />
          </div>

          <div className="text-center">
            <p className="leading-relaxed text-base">
              O amor venceu e vocês estão prestes e vivenciar o ápice dessa
              união.
            </p>
            <Image
              width={500}
              height={500}
              alt="Nossa história 5"
              className="w-full lg:w-1/2 h-auto lg:max-h-72 object-cover rounded mx-auto mt-5"
              src="/ft05.jpeg"
            />
          </div>

          <div className="text-center mt-10">
            <p className="leading-relaxed text-sm">
              E Deus disse:{" "}
              <span className="italic">
                “por isso o homem deixa o seu pai e a sua mãe para se unir com a
                sua mulher, e os dois se tornam uma só pessoa.” Assim já não são
                duas pessoas, mas uma só. Portanto, que ninguém separe o que
                Deus uniu.
              </span>{" "}
              <br />
              <span className="font-bold">Mateus 19:6</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
