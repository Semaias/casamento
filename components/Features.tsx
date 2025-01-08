import Image from 'next/image';

const Features = () => {


// Dados dos itens
const items = [
  { id: 1, icon: "/clock_icon.svg", title: "Item 1", description: "Descrição do item 1" },
  { id: 2, icon: "/js.jpg", title: "Item 2", description: "Descrição do item 2" },
  { id: 3, icon: "/js.jpg", title: "Item 3", description: "Descrição do item 3" },
  { id: 4, icon: "/js.jpg", title: "Item 4", description: "Descrição do item 4" },
  { id: 5, icon: "/js.jpg", title: "Item 5", description: "Descrição do item 5" },
  { id: 6, icon: "/js.jpg", title: "Item 6", description: "Descrição do item 6" },
  { id: 7, icon: "/js.jpg", title: "Item 7", description: "Descrição do item 7" },
  { id: 8, icon: "/js.jpg", title: "Item 8", description: "Descrição do item 8" },
];



return (
  <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Informações Adicionais</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
);
};

export default Features