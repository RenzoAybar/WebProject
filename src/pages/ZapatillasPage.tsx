import { FaStar, FaCartPlus } from "react-icons/fa";

const zapatillas = [
  { nombre: "Zapatilla Running", descripcion: "Deportiva, ligera", precio: 180, imagen: "/products/zapatilla1.png", rating: 4.9 },
  { nombre: "Zapatilla Urbana", descripcion: "Casual, cómoda", precio: 160, imagen: "/products/zapatilla1.png", rating: 4.8 },
  { nombre: "Zapatilla Blanca", descripcion: "Clásica, versátil", precio: 170, imagen: "/products/zapatilla1.png", rating: 4.7 },
  { nombre: "Zapatilla Negra", descripcion: "Básica, moderna", precio: 175, imagen: "/products/zapatilla1.png", rating: 4.6 },
  { nombre: "Zapatilla Skate", descripcion: "Juvenil, resistente", precio: 165, imagen: "/products/zapatilla1.png", rating: 4.7 },
  { nombre: "Zapatilla Trail", descripcion: "Outdoor, robusta", precio: 190, imagen: "/products/zapatilla1.png", rating: 4.8 },
  { nombre: "Zapatilla Azul", descripcion: "Colorida, fresca", precio: 155, imagen: "/products/zapatilla1.png", rating: 4.5 },
  { nombre: "Zapatilla Retro", descripcion: "Vintage, moda", precio: 185, imagen: "/products/zapatilla1.png", rating: 4.6 },
  { nombre: "Zapatilla Alta", descripcion: "Tobillera, urbana", precio: 200, imagen: "/products/zapatilla1.png", rating: 4.9 },
  { nombre: "Zapatilla Classic", descripcion: "Tradicional, cómoda", precio: 150, imagen: "/products/zapatilla1.png", rating: 4.4 },
];

export const ZapatillasPage = () => (
  <div className="min-h-screen bg-gray-50 py-10">
    <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Zapatillas</h1>
    <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {zapatillas.map((producto, idx) => (
        <article key={idx} className="rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl">
          <a href="#">
            <div className="relative flex items-end overflow-hidden rounded-xl">
              <img src={producto.imagen} alt={producto.nombre} />
              <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                <FaStar />
                <span className="ml-1 text-sm text-slate-400">{producto.rating}</span>
              </div>
            </div>
            <div className="mt-1 p-2">
              <h2 className="text-slate-700">{producto.nombre}</h2>
              <p className="mt-1 text-sm text-slate-400">{producto.descripcion}</p>
              <div className="mt-3 flex items-end justify-between">
                <p className="text-lg font-bold text-blue-500">${producto.precio}</p>
                <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white transition hover:bg-blue-600">
                  <FaCartPlus />
                  <button className="text-sm">Agregar</button>
                </div>
              </div>
            </div>
          </a>
        </article>
      ))}
    </div>
  </div>
);
