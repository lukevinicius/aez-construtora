import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'

import aezCasa from '@/assets/aez-casa.svg'

export function HomeComponent() {
  return (
    <section id="home" className="pt-[100px] relative">
      <div className="container">
        <div className="grid grid-cols-1">
          <div className="flex flex-col flex-wrap items-center gap-5 lg:flex-row">
            <div className="w-full lg:w-1/2">
              <div className="py-16 md:py-24 w-full">
                <p className="font-semibold text-lg p-2.5 bg-primaryColor/20 inline-block text-primaryColor">
                  Bem vindo!
                </p>
                <p className="font-bold text-3xl/normal md:text-[50px]/normal text-black mt-8">
                  De A a Z Construtora
                </p>
                <p className="text-zinc-500 mt-6">
                  Somos uma empresa de construção civil que atua no mercado a
                  mais de 5 anos, com uma equipe de profissionais qualificados e
                  prontos para atender a sua necessidade.
                </p>
                <div className="flex flex-wrap gap-5 mt-10 max-md:justify-center">
                  <Link href="https://wa.link/38f04r">
                    <Button
                      size="lg"
                      className="mt-8 bg-primaryColor hover:bg-primaryColor/85"
                    >
                      Entrar em contato
                    </Button>
                  </Link>
                </div>

                <div className="grid grid-cols-2 pt-12 md:pt-20 md:gap-12">
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-zinc-900">25+</p>
                    <p className="text-zinc-500">Projetos feitos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-semibold text-zinc-900">3+</p>
                    <p className="text-zinc-500">Anos de experiência</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[radial-gradient(#f3562b,#f3562b,#f3562b)] max-w-[800px] md:top-[100px] lg:absolute bottom-0 right-0 lg:w-6/12 w-full">
              <div>
                <Image
                  src={aezCasa}
                  alt="Foto pessoal"
                  className="inset-x-0 bottom-0 mx-auto -mt-16 lg:absolute md:mt-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
