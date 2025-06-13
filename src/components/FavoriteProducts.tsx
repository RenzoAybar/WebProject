import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useState, useEffect } from "react";

interface FavoriteProductsProps {
    searchTerm: string;
}

interface Producto {
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
    rating: number;
}

const productos: Producto[] = [
    { nombre: "Producto 1", descripcion: "Descripción breve", precio: 850, imagen: "/products/pantalon1.png", rating: 4.9 },
    { nombre: "Producto 2", descripcion: "Descripción breve", precio: 850, imagen: "/products/pantalon1.png", rating: 4.9 },
];

export const FavoriteProducts: React.FC<FavoriteProductsProps> = ({ searchTerm }) => {
    const [favorites, setFavorites] = useState<number[]>([]);

    // Cargar favoritos guardados en localStorage
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            setFavorites(JSON.parse(savedFavorites));
        }
    }, []);

    const toggleFavorite = (productId: number) => {
        const updatedFavorites = favorites.includes(productId)
            ? favorites.filter(id => id !== productId)
            : [...favorites, productId];
        
        setFavorites(updatedFavorites);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    const isFavorite = (productId: number) => favorites.includes(productId);

    return (
        <div className="py-5">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
                Productos Favoritos
            </h1>
            <div className="flex flex-wrap justify-center gap-6">
                {productos
                    .filter(producto =>
                        producto.nombre.toLowerCase().includes(searchTerm.toLowerCase())
                    )
                    .map((producto, idx) => (
                        <article key={idx} className="w-[270px] flex-shrink-0 rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl">
                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                <img src={producto.imagen} alt={producto.nombre} />
                                <button
                                    onClick={() => toggleFavorite(idx)}
                                    className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
                                >
                                    {isFavorite(idx) ? (
                                        <FaHeart size={20} color="red" />
                                    ) : (
                                        <FaRegHeart size={20} />
                                    )}
                                </button>
                            </div>
                            <div className="mt-2 p-2">
                                <h2 className="text-slate-700 font-semibold">{producto.nombre}</h2>
                                <p className="text-gray-600 text-sm">{producto.descripcion}</p>
                                <p className="text-gray-800 font-semibold mt-2">${producto.precio}</p>
                            </div>
                        </article>
                    ))}
            </div>
        </div>
    );
};
