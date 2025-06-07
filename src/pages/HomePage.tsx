import { Footer } from "../shared/Footer"
import { Carrosel } from "../components/Carrosel"
import { useEffect, useState } from "react"
import { FeaturedProducts } from "../components/FeaturedProducts"
import { RecommendedProducts } from "../components/RecommendedProducts"
import { MainBrands } from "../components/MainBrands"
import { useOutletContext } from "react-router-dom";

export const HomePage = () => {
    const [showSobreNosotros, setShowSobreNosotros] = useState(false)
    const { searchTerm } = useOutletContext<{ searchTerm: string }>(); 

    useEffect(() => {
        const handleShowSobreNosotros = () => setShowSobreNosotros(true)

        document.addEventListener('showSobreNosotros', handleShowSobreNosotros)

        return () => {
            document.removeEventListener('showSobreNosotros', handleShowSobreNosotros)
        }
    }, [])

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <Carrosel />
            </main>
            
            <MainBrands/>

            <FeaturedProducts searchTerm={searchTerm} /> {}
            <RecommendedProducts searchTerm={searchTerm} /> {}
            <Footer />

            {}
            {showSobreNosotros && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4" onClick={() => setShowSobreNosotros(false)}>
                    <div
                        className="bg-white rounded-lg shadow-lg max-w-3xl w-full overflow-y-auto relative"
                        style={{ maxHeight: '90vh' }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Botón cerrar */}
                        <button
                            onClick={() => setShowSobreNosotros(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
                        >
                            ×
                        </button>

                        {/* Contenido */}
                        <div className="p-8">
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold mb-2">Historia de Progresemos Juntos</h2>
                                <div className="bg-amber-100 border border-amber-200 rounded-lg p-4 text-sm mb-6">
                                    Progresemos Juntos nació en 2023 con la visión de crear una comunidad donde todos pudieran encontrar productos de calidad a precios accesibles, fomentando el desarrollo local y el comercio justo. Nuestra plataforma une a productores y consumidores en un ecosistema de comercio sostenible y responsable.
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                <div className="bg-white border rounded-lg p-4 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <span className="bg-amber-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-amber-700 font-bold">•</span>
                                        <span className="font-semibold">Nuestros inicios</span>
                                    </div>
                                    <div className="text-xs text-gray-700">
                                        Fundada a mediados de 2023 por un grupo de emprendedores comprometidos con el desarrollo social, seleccionamos productos con amor y nos asociamos con talentos locales para ofrecer una experiencia única para todos.
                                    </div>
                                </div>

                                <div className="bg-white border rounded-lg p-4 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <span className="bg-amber-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-amber-700 font-bold">•</span>
                                        <span className="font-semibold">Nuestra misión</span>
                                    </div>
                                    <div className="text-xs text-gray-700">
                                        Buscamos promover el comercio justo, apoyar la producción local y potenciar alternativas de consumo responsable, creando lazos de beneficio entre consumidores y productores.
                                    </div>
                                </div>

                                <div className="bg-white border rounded-lg p-4 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <span className="bg-amber-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-amber-700 font-bold">•</span>
                                        <span className="font-semibold">Valores fundamentales</span>
                                    </div>
                                    <div className="text-xs text-gray-700">
                                        Nuestros pilares son la transparencia, la calidad y el compromiso con el bienestar común. Creemos en generar relaciones comerciales justas y en aportar para que las personas crezcan a través del mérito propio.
                                    </div>
                                </div>

                                <div className="bg-white border rounded-lg p-4 shadow-sm">
                                    <div className="flex items-center mb-2">
                                        <span className="bg-amber-200 rounded-full w-6 h-6 flex items-center justify-center mr-2 text-amber-700 font-bold">•</span>
                                        <span className="font-semibold">Mirando al futuro</span>
                                    </div>
                                    <div className="text-xs text-gray-700">
                                        Apostamos por la innovación, la tecnología y nuevas formas de colaboración para seguir cumpliendo nuestra misión original.
                                    </div>
                                </div>
                            </div>

                            <div className="bg-amber-100 border border-amber-200 rounded-lg p-4 text-center">
                                <div className="font-semibold mb-2">Sé parte de nuestra historia</div>
                                <div className="text-sm mb-4">Te invitamos a unirte a nuestra comunidad y ser parte del cambio que queremos ver en el mundo.</div>
                                <a
                                    href="https://www.youtube.com/@progresemosjuntos"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-2 px-4 rounded transition inline-block"
                                >
                                    Únete a nosotros
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
