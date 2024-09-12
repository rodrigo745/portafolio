"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav(){
    
    const enlaces = ["/", "/pages/curriculum", "/pages/portafolio", "/pages/blog", "/pages/contacto"];
    const nombres = ["Sobre mi", "Curriculum", "Portafolio", "Blog", "Contacto"];
    const [ a, setA ] = useState(true);
    const [ b, setB ] = useState(false);
    const [ c, setC ] = useState(false);
    const [ d, setD ] = useState(false);
    const [ e, setE ] = useState(false);
    const variables = [a,b,c,d,e];
    const [ menu, setMenu ] = useState(false);

    const addColor = (e)=>{
        e.target.id == 0 ? setA(true) : setA(false);
        e.target.id == 1 ? setB(true) : setB(false);
        e.target.id == 2 ? setC(true) : setC(false);
        e.target.id == 3 ? setD(true) : setD(false);
        e.target.id == 4 ? setE(true) : setE(false);
    }
    
    const activeMenu = (e)=>{ setMenu(!menu); }

    return(
        <div>
            {/* Desktop */}
            <div className="absolute right-0 top-0 w-[60%] hidden lg:flex justify-between bg-neutral-700 shadow-md rounded-bl-lg rounded-tr-lg p-3 px-4">
                {
                    enlaces.map((es, i)=> (
                        <Link key={i} id={i} className={variables[i] ? "text-yellow-600" : ""} onClick={addColor} 
                        href={es}>{nombres[i]}</Link>
                    ))
                }
            </div>
            {/* Movil */}
            <div className="block lg:hidden absolute top-0 right-0 p-4">
                <button onClick={activeMenu} className="rotate-90 font-bold text-xl">|||</button>
            </div>
            {
                menu &&
                <div className="absolute top-16 bg-neutral-800 w-full p-4 flex flex-col space-y-2 pb-6">
                    {
                        enlaces.map((e, i)=> (
                            <Link id={i} className={`hover:bg-neutral-900 p-2 rounded-md ${variables[i] ? "text-yellow-600" : ""}`} 
                            key={i} href={e} onClick={addColor}>{nombres[i]}</Link>
                        ))
                    }
                </div>
            }
        </div>
    )
}