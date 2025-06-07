

export const RegisterPage = () => {
    return (
        <>
            <section className="min-h-screen flex items-stretch text-white">
                {/* Imagen lateral para pantallas grandes */}
                <div
                    className="lg:flex w-1/2 hidden bg-white bg-no-repeat bg-cover relative items-center"
                    style={{
                        backgroundImage:
                            "url(img/shopping.jpg)",
                    }}
                >
                    <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    <div className="w-full px-24 z-10">
                        <h1 className="text-5xl font-bold text-left tracking-wide">Compra Seguro</h1>
                        <p className="text-3xl my-4">
                            Captura tu recuerdo personal de una manera única, en cualquier lugar.
                        </p>
                    </div>
                    <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                        {[
                            {
                                src: "img/facebook.png",
                                alt: "Facebook",
                            },
                            {
                                src: "img/twitter.png",
                                alt: "Twitter",
                            },
                            {
                                src: "img/instagram.png",
                                alt: "Instagram",
                            },
                        ].map((icon, i) => (
                            <span key={i}>
                                <img src={icon.src} alt={icon.alt} width={42} height={42} />
                            </span>
                        ))}
                    </div>
                </div>

                {/* Formulario de login */}
                <div
                    className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-white">
                    {/* Imagen de fondo para móviles */}
                    <div
                        className="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
                        style={{
                            backgroundImage:
                                "url(img/shopping.jpg)",
                        }}
                    >
                        <div className="absolute bg-black opacity-60 inset-0 z-0"></div>
                    </div>

                    <div className="w-full py-6 z-20">
                        <div className="flex justify-center">
                            <img src="/logo2.svg" alt="logo" className="h-[80px] my-8" />
                        </div>
                        <p className="text-gray-600 text-lg mb-8">
                            Usa el correo electrónico de tu cuenta
                        </p>
                        <div className="sm:w-2/3 w-full mx-auto">
                            <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-gray-100/50 hover:border-indigo-100/50 hover:bg-white/90 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <form action="" className="space-y-6">
                                    <div>
                                        <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre y Apellido</label>
                                        <input
                                            type="text"
                                            name="nombre"
                                            id="nombre"
                                            placeholder="Ingresa tu nombre y apellido"
                                            className="w-full px-4 py-3 border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white focus:placeholder-gray-400 transition-all duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Ingresa tu email"
                                            className="w-full px-4 py-3 border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white focus:placeholder-gray-400 transition-all duration-200"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="Ingresa tu contraseña"
                                            className="w-full px-4 py-3 border border-gray-300/50 rounded-lg bg-white/50 backdrop-blur-sm placeholder-gray-500 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:bg-white focus:placeholder-gray-400 transition-all duration-200"
                                        />
                                    </div>
                                    <div className="text-right">
                                        <a href="/recuperar-contrasena" className="text-sm text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300/50 rounded focus:ring-2 focus:ring-offset-0 transition-all duration-200"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="ml-3 block text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200 cursor-pointer"
                                        >
                                            Recordarme
                                        </label>
                                    </div>
                                    <div className="text-sm">
                                        <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500 transition-colors duration-200 underline decoration-2 underline-offset-2 hover:decoration-indigo-500">
                                            ¿Olvidaste tu contraseña?
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            type="submit"
                                            className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700/90 hover:shadow-xl active:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105 active:scale-95"
                                        >
                                            Registrarse
                                        </button>
                                    </div>
                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300/50"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white/80 backdrop-blur-sm text-gray-500 font-medium">O continúa con</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-center space-x-4">
                                        <a href="#" className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-indigo-50/20 transition-all duration-200 transform hover:scale-105">
                                            <svg fill="#000" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-indigo-50/20 transition-all duration-200 transform hover:scale-105">
                                            <svg fill="#000" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                            </svg>
                                        </a>
                                        <a href="#" className="p-3 rounded-full bg-white/80 backdrop-blur-sm hover:bg-indigo-50/20 transition-all duration-200 transform hover:scale-105">
                                            <svg fill="#000" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};