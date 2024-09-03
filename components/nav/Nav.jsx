import Link from "next/link"

export default function Nav(){
    return(
        <div>
            {/* Desktop */}
            <div className="absolute  right-0 top-0 w-[60%] hidden lg:flex justify-between bg-neutral-700 shadow-md rounded-bl-lg rounded-tr-lg p-3 px-4">
            <Link href="/">Sobre mi</Link>
            <Link href="/pages/curriculum">Curriculum</Link> 
            <Link href="/pages/portafolio">Portafolio</Link> 
            <Link href="/pages/blog">Blog</Link>
            <Link href="/pages/contacto">Contacto</Link>
            </div>
            {/* Movil */}
            <div className="block lg:hidden absolute top-0 right-0 p-4">
                <button className="rotate-90 font-bold text-xl">|||</button>
            </div>
        </div>
    )
}