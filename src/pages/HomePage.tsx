import { Footer } from "../shared/Footer"
import { Carrosel } from "../components/Carrosel"

export const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <Carrosel/>
            </main>
            <Footer/>
        </div>
    )
}