import { Sparkle } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 text-white bg-black">
      <div className="container">
        <div className="text-center" data-aos="fade-up">
          <div className="inline-block">
            <div className="bg-primaryColor text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5">
              <Sparkle size={16} />
              <span className="text-sm">Serviços que oferecemos</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-14 gap-7">
          <div
            className="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-t to-white/[4%] from-transparent"
            data-aos="fade-up"
          >
            <p className="text-zinc-200">Construção de casas novas</p>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis delectus incidunt velit hic minima dolor impedit,
              architecto maiores nobis ipsum numquam id labore alias tenetur
              quas vero modi. Quasi, vitae.
            </p>
          </div>
          <div
            className="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-t to-white/[4%] from-transparent aos-init aos-animate"
            data-aos="fade-up"
          >
            <p className="text-zinc-200">Construção de casas novas</p>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis delectus incidunt velit hic minima dolor impedit,
              architecto maiores nobis ipsum numquam id labore alias tenetur
              quas vero modi. Quasi, vitae.
            </p>
          </div>
          <div
            className="border-2 border-gray/[12%] p-7 space-y-5 bg-gradient-to-t to-white/[4%] from-transparent aos-init aos-animate"
            data-aos="fade-up"
          >
            <p className="text-zinc-200">Construção de casas novas</p>
            <p className="text-zinc-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis delectus incidunt velit hic minima dolor impedit,
              architecto maiores nobis ipsum numquam id labore alias tenetur
              quas vero modi. Quasi, vitae.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
