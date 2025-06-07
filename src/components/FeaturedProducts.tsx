import { FaCartPlus, FaStar } from "react-icons/fa";

export const FeaturedProducts = () => {
    return (

        <>
            <div className=" pb-10">
                <h1 className="text-center text-3xl font-bold text-gray-800">
                    Productos Destacados
                </h1>
            </div>
            {/* Product List */}
            <section className="py-5">
                <div className="mx-auto max-w-6xl grid grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    {/* Product Card 1 */}
                    <article className="rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                <img src="/products/polera.png" alt="Product" />
                                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                    <FaStar />
                                    <span className="ml-1 text-sm text-slate-400">4.9</span>
                                </div>
                            </div>
                            <div className="mt-1 p-2">
                                <h2 className="text-slate-700">The Hilton Hotel</h2>
                                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>
                                <div className="mt-3 flex items-end justify-between">
                                    <p className="text-lg font-bold text-blue-500">$850</p>
                                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white transition hover:bg-blue-600">
                                        <FaCartPlus />
                                        <button className="text-sm">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>

                    {/* Product Card 2 */}
                    <article className="rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                <img src="/products/pantalon1.png" alt="Product" />
                                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                    <FaStar />
                                    <span className="ml-1 text-sm text-slate-400">4.9</span>
                                </div>
                            </div>
                            <div className="mt-1 p-2">
                                <h2 className="text-slate-700">The Hilton Hotel</h2>
                                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>
                                <div className="mt-3 flex items-end justify-between">
                                    <p className="text-lg font-bold text-blue-500">$850</p>
                                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white transition hover:bg-blue-600">
                                        <FaCartPlus />
                                        <button className="text-sm">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article className="rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                <img src="/products/pantalon1.png" alt="Product" />
                                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                    <FaStar />
                                    <span className="ml-1 text-sm text-slate-400">4.9</span>
                                </div>
                            </div>
                            <div className="mt-1 p-2">
                                <h2 className="text-slate-700">The Hilton Hotel</h2>
                                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>
                                <div className="mt-3 flex items-end justify-between">
                                    <p className="text-lg font-bold text-blue-500">$850</p>
                                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white transition hover:bg-blue-600">
                                        <FaCartPlus />
                                        <button className="text-sm">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>

                    <article className="rounded-xl bg-white p-3 shadow-lg transition hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <div className="relative flex items-end overflow-hidden rounded-xl">
                                <img src="/products/pantalon1.png" alt="Product" />
                                <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                                    <FaStar />
                                    <span className="ml-1 text-sm text-slate-400">4.9</span>
                                </div>
                            </div>
                            <div className="mt-1 p-2">
                                <h2 className="text-slate-700">The Hilton Hotel</h2>
                                <p className="mt-1 text-sm text-slate-400">Lisbon, Portugal</p>
                                <div className="mt-3 flex items-end justify-between">
                                    <p className="text-lg font-bold text-blue-500">$850</p>
                                    <div className="flex items-center space-x-1.5 rounded-lg bg-blue-500 px-4 py-1.5 text-white transition hover:bg-blue-600">
                                        <FaCartPlus />
                                        <button className="text-sm">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </article>
                </div>
            </section>
        </>
    );
};
