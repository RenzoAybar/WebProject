import { FaStar, FaCartPlus } from "react-icons/fa";

const vestidos = [
  { nombre: "Vestido Floral", descripcion: "Verano, fresco", precio: 150, imagen: "/products/vestido1.png", rating: 4.8 },
  { nombre: "Vestido Elegante", descripcion: "Noche, largo", precio: 200, imagen: "/products/vestido1.png", rating: 4.9 },
  { nombre: "Vestido Casual", descripcion: "Día a día, cómodo", precio: 120, imagen: "/products/vestido1.png", rating: 4.7 },
  { nombre: "Vestido Corto", descripcion: "Juvenil, moderno", precio: 130, imagen: "/products/vestido1.png", rating: 4.6 },
  { nombre: "Vestido de Fiesta", descripcion: "Brillante, elegante", precio: 250, imagen: "/products/vestido1.png", rating: 4.9 },
  { nombre: "Vestido Rojo", descripcion: "Clásico, llamativo", precio: 180, imagen: "/products/vestido1.png", rating: 4.8 },
  { nombre: "Vestido Azul", descripcion: "Formal, sobrio", precio: 170, imagen: "/products/vestido1.png", rating: 4.7 },
  { nombre: "Vestido Blanco", descripcion: "Verano, ligero", precio: 140, imagen: "/products/vestido1.png", rating: 4.5 },
  { nombre: "Vestido Negro", descripcion: "Noche, elegante", precio: 210, imagen: "/products/vestido1.png", rating: 4.8 },
  { nombre: "Vestido Midi", descripcion: "Cómodo, versátil", precio: 160, imagen: "/products/vestido1.png", rating: 4.6 },
];

export const VestidosPage = () => (
  <div className="min-h-screen bg-gray-50 py-10">
    <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Vestidos</h1>
    <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {vestidos.map((producto, idx) => (
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
