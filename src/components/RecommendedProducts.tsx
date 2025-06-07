import { FaCartPlus, FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { useRef } from "react";

interface RecommendedProductsProps {
    searchTerm: string;
}

const productos = [
    { nombre: "Producto 1", descripcion: "Descripción breve", precio: 850, imagen: "/products/pantalon1.png", rating: 4.9 },
    { nombre: "Producto 2", descripcion: "Descripción breve", precio: 850, imagen: "/products/pantalon1.png", rating: 4.9 },
];

export const RecommendedProducts: React.FC<RecommendedProductsProps> = ({ searchTerm }) => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        scrollRef.current?.scrollBy({ left: -320, behavior: "smooth" });
    };

    const scrollRight = () => {
        scrollRef.current?.scrollBy({ left: 320, behavior: "smooth" });
    };

    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="py-5">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
                Recomendados para ti
            </h1>
            <section className="py-5">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="relative">
                        <button onClick={scrollLeft} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200">
                            <FaChevronLeft size={20} />
                        </button>
                        <div ref={scrollRef} className="flex overflow-x-auto space-x-6 py-4 scroll-smooth no-scrollbar">
                            {productosFiltrados.map((producto, idx) => (
                                <article key={idx} className="w-[270px] flex-shrink-0 rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <div className="relative flex items-end overflow-hidden rounded-xl">
                                            <img src={producto.imagen} alt="Product" />
                                            <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                                <FaStar />
                                                <span className="ml-1 text-sm text-slate-400">{producto.rating}</span>
                                            </div>
                                        </div>
                                        <div className="mt-1 p-2">
                                            <h2 className="text-slate-700 font-semibold">{producto.nombre}</h2>
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
                        <button onClick={scrollRight} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 bg-white shadow-md p-2 rounded-full hover:bg-gray-200">
                            <FaChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};
