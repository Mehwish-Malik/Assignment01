
export default async function about (){
   await new Promise(resolve =>
    setTimeout(resolve,3000))
    return(
        <div className="bg-orange-100 min-h-screen sm:p-20">
        
        <div>
      
       < h1 className="text-2xl font-serif text-pink-700 py-2 mx-2  " > This is Mehwish Malik! </h1>
       <p className="text-justify py-2 px-1 mx-5 text-black">
        I am a student at GIAIC, persuing course Artificial Intelligence,web 3.0 & Metaverse.
       </p>
        
        </div>
          </div>
          
    )
    }