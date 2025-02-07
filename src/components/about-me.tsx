import { Sparkle } from 'lucide-react'

export function AboutMe() {
  return (
    <section
      id="about-me"
      className="py-16 md:py-24 border-t-2 border-gray/[12%] dark:border-white/[12%] w-full"
    >
      <div className="container mx-auto">
        <div className="inline-block">
          <div
            className="bg-primaryColor text-white text-sm font-semibold py-3 px-5 uppercase rounded-full flex items-center gap-2.5"
            data-aos="fade-up"
          >
            <Sparkle size={16} />
            <span className="text-sm">Sobre nós</span>
          </div>
        </div>
        <p
          className="text-2xl/normal text-zinc-900 font-semibold mt-7"
          data-aos="fade-up"
        >
          De A a Z Construtora
        </p>
        <p className="text-zinc-500 mt-6" data-aos="fade-up">
          Somos uma empresa de construção civil que atua no mercado a mais de 5
          anos, com uma equipe de profissionais qualificados e prontos para
          atender a sua necessidade.
        </p>
        <div
          className="flex-wrap items-start sm:flex gap-7 space-y-7 sm:space-y-0 mt-14"
          data-aos="fade-up"
        >
          <div className="space-y-2.5 font-semibold flex-1">
            <p className="text-zinc-500">Contato</p>
            <p className="text-zinc-900">deaazconstrutora@mail.com</p>
          </div>
          <div className="space-y-2.5 font-semibold flex-1">
            <p className="text-zinc-500">Telefone</p>
            <p className="text-zinc-900">+55 (88) 55555-5555</p>
          </div>
          <div className="space-y-2.5 font-semibold flex-1">
            <p className="text-zinc-500">Tipos</p>
            <p className="text-zinc-900">Novas e Usadas</p>
          </div>
          <div className="space-y-2.5 font-semibold flex-1">
            <p className="text-zinc-500">Interesse</p>
            <p className="text-zinc-900">Games, Leitura </p>
          </div>
        </div>
      </div>
    </section>
  )
}
