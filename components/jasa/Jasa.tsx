import Image from "next/image";
import Link from "next/link";

const Jasa = () => {
  return (
    <>
        <section id="jasa" className=" bg-base-third">
            <div className="container">
                <div className="flex flex-wrap justify-center w-full px-4 xl:mx-auto xl:w-1/2 overflow-hidden">
                    <div className="bg-base-first md:w-1/2 my-10 rounded-3xl hidden md:block px-8 py-8">
                    <Image 
                            src="/assets/image/image-economy.png" 
                            alt="Image Hero"
                            width={`960`}
                            height={`600`}
                            className="px-2 py-2 w-full"
                        />
                    </div>
                    <div className="px-4 md:w-1/2 my-10">
                        <h3 className=" text-base-first font-bold text-3xl mb-8 leading-relaxed">Bussiness Company</h3>
                        <p className=" text-slate-700 font-semibold mb-8 text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam reiciendis rem perspiciatis voluptatem, eum molestiae!</p>
                        <Link href={``} 
                            className="text-sm text-base-second hover:text-white hover:shadow-md hover:bg-base-first hover:py-2 hover:px-2 hover:rounded-md"
                        >
                            Selengkapnya
                        </Link>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-96">

        </section>
    </>
  )
}

export default Jasa