
import Link from "next/link"
export default function Navbar(){
    return(
        <div>
            <nav className=" bg-rose-700 h-auto sm:h-12 md:h-16 lg:h-16 py-2 px-3 text-black flex flex-col sm:flex-row justify-between items-center  ">
              <div className="mb-4 sm:mb-0">
                <h1 className="text-xl  sm:text-xl md:2xl lg:2xl font-semibold ">
                  Mehwish Malik
                </h1>
              </div>
          
            
      <Link href="/" className="hover:text-white">HOME</Link>
  <Link href="/about" className="hover:text-white">About</Link>
  <Link href="/contact-us" className="hover:text-white">Contact Us</Link>
  <Link href="/services" className="hover:text-white">Services</Link>
   <Link href="/login" className="hover:text-white">Login/signup</Link>
   
   </nav>
     </div>
    
    
      
      
        
        
    )
    }