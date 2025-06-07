import { FaCartPlus, FaStar } from "react-icons/fa";

interface FeaturedProductsProps {
    searchTerm: string;
}

const productos = [
    {
        nombre: "The Hilton Hotel",
        descripcion: "Lisbon, Portugal",
        precio: 850,
        imagen: "/products/polera.png",
        rating: 4.9,
    },
    {
        nombre: "The Hilton Hotel",
        descripcion: "Lisbon, Portugal",
        precio: 850,
        imagen: "/products/pantalon1.png",
        rating: 4.9,
    },
];

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ searchTerm }) => {
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className=" pb-10">
                <h1 className="text-center text-3xl font-bold text-gray-800">
                    Productos Destacados
                </h1>
            </div>
            <section className="py-5">
                <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {productosFiltrados.map((producto, idx) => (
                        <article key={idx} className="rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl">
                            <a href="#">
                                <div className="relative flex items-end overflow-hidden rounded-xl">
                                    <img src={producto.imagen} alt="Product" />
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
                                            <button className="text-sm">Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </article>
                    ))}
                </div>
            </section>
        </>
    );
};

