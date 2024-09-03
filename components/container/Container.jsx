// Componentes
import Nav from "@/components/nav/Nav";

export default function Container(){
    return(
        <div className="w-full mt-5 md:mt-0 md:w-[72.3%] bg-neutral-800 rounded-xl p-3">
            <div className="flex justify-between">
                <h2>Contenedor</h2>
                <Nav/>
            </div>
            
        </div>
    )
}