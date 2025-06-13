import { FaStar, FaCartPlus } from "react-icons/fa";

const pantalones = [
  {
    nombre: "Pantalón Slim Fit",
    descripcion: "Azul oscuro, algodón",
    precio: 120,
    imagen: "/products/pantalon1.png",
    rating: 4.8,
  },
  {
    nombre: "Pantalón Chino",
    descripcion: "Beige, casual",
    precio: 110,
    imagen: "/products/pantalon1.png",
    rating: 4.7,
  },
  {
    nombre: "Pantalón Jogger",
    descripcion: "Negro, deportivo",
    precio: 90,
    imagen: "/products/pantalon1.png",
    rating: 4.6,
  },
  {
    nombre: "Pantalón Cargo",
    descripcion: "Verde militar, bolsillos",
    precio: 130,
    imagen: "/products/pantalon1.png",
    rating: 4.9,
  },
  {
    nombre: "Pantalón Formal",
    descripcion: "Gris, elegante",
    precio: 150,
    imagen: "/products/pantalon1.png",
    rating: 4.8,
  },
  {
    nombre: "Pantalón Skinny",
    descripcion: "Azul claro, juvenil",
    precio: 100,
    imagen: "/products/pantalon1.png",
    rating: 4.5,
  },
  {
    nombre: "Pantalón Recto",
    descripcion: "Negro, clásico",
    precio: 115,
    imagen: "/products/pantalon1.png",
    rating: 4.7,
  },
  {
    nombre: "Pantalón de Lino",
    descripcion: "Blanco, verano",
    precio: 140,
    imagen: "/products/pantalon1.png",
    rating: 4.6,
  },
  {
    nombre: "Pantalón Stretch",
    descripcion: "Gris oscuro, flexible",
    precio: 125,
    imagen: "/products/pantalon1.png",
    rating: 4.8,
  },
  {
    nombre: "Pantalón Classic",
    descripcion: "Marrón, tradicional",
    precio: 105,
    imagen: "/products/pantalon1.png",
    rating: 4.4,
  },
];

export const PantalonesPage = () => (
  <div className="min-h-screen bg-gray-50 py-10">
    <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
      Pantalones
    </h1>
    <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {pantalones.map((producto, idx) => (
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
