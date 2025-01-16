import Image from 'next/image';

const Features = () => {


  // Dados dos itens
  const items = [
    {
      id: 1,
      icon: "/confirmPresence.svg",
      title: "Confirme sua presença.",
      description: ""
    },
    {
      id: 2,
      icon: "/bePolite.svg",
      title: "Seja educado com todos.",
      description: ""
    },
    {
      id: 3,
      icon: "/haveFun.svg",
      title: "Aproveitem bastante!",
      description: ""
    },
    {
      id: 4,
      icon: "/dress.svg",
      title: "Branco é a cor da noiva!",
      description: ""
    },
    // { id: 5,
    //   icon: "/insta.svg",
    //   title: "Lembrem de nos marcar", 
    //   description: ""
    // },
    {
      id: 5,
      icon: "/cake.svg",
      title: "Não ataquem a mesa de doces!",
      description: ""
    },
    {
      id: 6,
      icon: "/noPhone.svg",
      title: "Não atrapaçhe os fotógrafos!",
      description: ""
    },
    {
      id: 7,
      icon: "/hug.svg",
      title: "Não saiam sem se despedir dos noivos!",
      description: ""
    },
    {
      id: 8,
      icon: "/guestDontInvite.svg",
      title: "Convidado não convida!",
      description: ""
    },
    {
      id: 9,
      icon: "/gift.svg",
      title: "Os presentes devem ser entregues antes da cerimônia.",
      description: ""
    },
  ];



  return (
    <section className="">

      <div className="max-w-7xl px-5 mt-20 py-10">
        <h2 className="text-3xl font-black text-[#394C40] text-center pb-10">
          Manual do Convidado
        </h2>
        <div className="grid grid-cols-3 text-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-1 sm:gap-2 md:gap-6 lg:gap-10">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center justify-start p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="p-3"
                />
              </div>
              <h3 className="text-sm text-[#394C40] font-semibold mb-2">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features