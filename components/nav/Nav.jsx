"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav(){
    
    const [ a, setA ] = useState(true);
    const [ b, setB ] = useState(false);
    const [ c, setC ] = useState(false);
    const [ d, setD ] = useState(false);
    const [ e, setE ] = useState(false);

    const addColor = (e)=>{
        e.target.id == 0 ? setA(true) : setA(false);
        e.target.id == 1 ? setB(true) : setB(false);
        e.target.id == 2 ? setC(true) : setC(false);
        e.target.id == 3 ? setD(true) : setD(false);
        e.target.id == 4 ? setE(true) : setE(false);
    }
    
    return(
        <div>
            {/* Desktop */}
            <div className="absolute right-0 top-0 w-[60%] hidden lg:flex justify-between bg-neutral-700 shadow-md rounded-bl-lg rounded-tr-lg p-3 px-4">
            <Link id="0" className={a ? "text-yellow-600" : ""} onClick={addColor} href="/">Sobre mi</Link>
            <Link id="1" className={b ? "text-yellow-600" : ""} onClick={addColor}  href="/pages/curriculum">Curriculum</Link> 
            <Link id="2" className={c ? "text-yellow-600" : ""} onClick={addColor}  href="/pages/portafolio">Portafolio</Link> 
            <Link id="3" className={d ? "text-yellow-600" : ""} onClick={addColor}  href="/pages/blog">Blog</Link>
            <Link id="4" className={e ? "text-yellow-600" : ""} onClick={addColor}  href="/pages/contacto">Contacto</Link>
            </div>
            {/* Movil */}
            <div className="block lg:hidden absolute top-0 right-0 p-4">
                <button className="rotate-90 font-bold text-xl">|||</button>
            </div>
        </div>
    )
}