import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <>
        <section id="about" className="py-10">
            <div className="container">
                <div className="flex flex-col items-center text-center">
                    <div className="group">
                        <Image 
                            src="/assets/image/image-coint.png" 
                            alt="Image Hero"
                            width={`960`}
                            height={`600`}
                            className="py-2 w-80 lg:w-96 group-hover:animate-bounce ease-in-out duration-200"
                        />
                    </div>
                    <h2 className=" text-slate-800 text-3xl font-bold my-2 lg:text-4xl">Mewujudkan Ide Kreatif</h2>
                    <p className=" text-slate-700 my-2 font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, ex?</p>
                    <Link href={''} className=" text-base-first py-2 px-2 border rounded-full hover:bg-base-first hover:text-white hover:shadow-md my-6">
                        Selengkapnya
                    </Link>
                </div>
            </div>
        </section>
    </>
  )
}

export default About