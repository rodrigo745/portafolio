import { LuMail } from "react-icons/lu";
import { LuSmartphone } from "react-icons/lu";
import { LuCalendarDays } from "react-icons/lu";
import { LuMapPin } from "react-icons/lu";

export default function Dash(){

    const infoAdicional = [
        {
            logo: <LuMail className="w-full mt-7 text-xl"/>,
            titulo: "Correo",
            info: "roodrigoquinteros@gmail.com"
        },
        {
            logo: <LuSmartphone className="w-full mt-7 text-xl"/>,
            titulo: "Teléfono",
            info: "+54 9 352435115"
        },
        {
            logo: <LuCalendarDays className="w-full mt-7 text-xl"/>,
            titulo: "Nacimiento",
            info: "26 / 11 / 1999"
        },
        {
            logo: <LuMapPin className="w-full mt-7 text-xl"/>,
            titulo: "Ubicación",
            info: "Córdoba, Argentina"
        }
    ];

    return(
        <div className="w-full mb-4 md:w-[25%] bg-neutral-800 rounded-xl p-3 px-5">
            {/* Perfil */}
            <div className="flex flex-col items-center mt-8 pb-6">
                <div className="bg-neutral-700 w-36 h-36 md:w-[10vw] md:h-[9.4vw] rounded-xl shadow-md"></div>
                <h1 className="mt-5 text-lg text-center">Rodrigo Javier Quinteros</h1>
                <p className="text-sm bg-neutral-700 p-1 px-4 rounded-lg mt-4 shadow-inner">Desarrollador Web</p>
            </div>
            <hr className="border-neutral-600"/>
            {/* Información adicional */}
            <div className="overflow-hidden pb-3">
                {
                    infoAdicional.map((e,i)=> (
                        <div key={i} className="mt-5 flex justify-between">
                            <div className="w-[4vw] h-[4vw] rounded-lg shadow-md">
                                {e.logo}
                            </div>
                            <div className="flex flex-col pt-2 w-full pl-3">
                                <label className="text-neutral-400">{e.titulo}</label>
                                <label className="text-sm">{e.info}</label>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}