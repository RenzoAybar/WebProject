import { Footer } from "../shared/Footer"
import { Navbar } from "../shared/Navbar"
import {Carrosel} from "../components/Carrosel"

export const HomePage = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <Carrosel/>
            </main>
            <Footer/>
        </div>
    )
}