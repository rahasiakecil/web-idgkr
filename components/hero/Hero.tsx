import Image from "next/image"

const Hero = () => {
  return (
    <>
        <section id="hero" className="pt-12 overflow-hidden bg-base-first">
            <div className="flex flex-wrap">
                <div className="w-full px-20 self-center lg:w-1/2 my-6">
                    <h1 className=" text-white text-4xl font-bold my-6 lg:max-w-md lg:text-6xl">Solusi Ide Kreatif</h1>
                    <p className="my-10 text-xl font-semibold text-slate-400 lg:max-w-sm leading-relaxed max-w-md lg:text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deleniti expedita ipsa velit saepe quo.</p>
                    <a href="#" target="_blank" className=" border text-slate-100 hover:underline py-2 px-2 rounded-full border-white shadow-md hover:opacity-50">Yuk cari tahu !</a>
                </div>
                <div className="w-full px-4 self-end lg:w-1/2 my-6">
                    <Image 
                        src="/assets/image/image-hero.png" 
                        alt="Image Hero"
                        width={`960`}
                        height={`600`}
                        className="w-full" 
                    />
                </div>
            </div>
        </section>
    </>
  )
}

export default Hero