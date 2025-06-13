import { FaStar, FaCartPlus } from "react-icons/fa";

const polos = [
  { nombre: "Polo Blanco", descripcion: "Clásico, algodón", precio: 60, imagen: "/products/polo1.png", rating: 4.7 },
  { nombre: "Polo Negro", descripcion: "Casual, básico", precio: 65, imagen: "/products/polo1.png", rating: 4.8 },
  { nombre: "Polo Azul", descripcion: "Juvenil, moderno", precio: 70, imagen: "/products/polo1.png", rating: 4.6 },
  { nombre: "Polo Rojo", descripcion: "Vibrante, llamativo", precio: 68, imagen: "/products/polo1.png", rating: 4.5 },
  { nombre: "Polo Verde", descripcion: "Fresco, verano", precio: 72, imagen: "/products/polo1.png", rating: 4.7 },
  { nombre: "Polo Gris", descripcion: "Formal, sobrio", precio: 66, imagen: "/products/polo1.png", rating: 4.8 },
  { nombre: "Polo Rayas", descripcion: "Estampado, juvenil", precio: 75, imagen: "/products/polo1.png", rating: 4.6 },
  { nombre: "Polo Manga Larga", descripcion: "Invierno, cómodo", precio: 80, imagen: "/products/polo1.png", rating: 4.7 },
  { nombre: "Polo Slim Fit", descripcion: "Ajustado, moderno", precio: 78, imagen: "/products/polo1.png", rating: 4.8 },
  { nombre: "Polo Classic", descripcion: "Tradicional, algodón", precio: 62, imagen: "/products/polo1.png", rating: 4.5 },
];

export const PolosPage = () => (
  <div className="min-h-screen bg-gray-50 py-10">
    <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">Polos</h1>
    <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {polos.map((producto, idx) => (
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
