import { Button } from "@/components/ui/button"
import Image from 'next/image'

export default function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('servicos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative overflow-hidden py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1200px]">
          <div className="relative w-full pt-[100%]">
            <Image
              src="/logo.png"
              alt="Background Pattern"
              fill
              className="object-contain opacity-5"
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative">
        <div className="mb-10 relative">
          <Image
            src="/logo.png"
            alt="Instituto Bem-Estar Social Logo"
            width={180}
            height={180}
            className="mx-auto animate-float"
            priority
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 bg-clip-text text-transparent">
          Promovendo o Bem-Estar Social
        </h1>
        <p className="text-lg sm:text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
          Construindo uma sociedade mais saudável, inclusiva e feliz através da união e do cuidado com as pessoas
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={scrollToServices}
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-green-500 hover:opacity-90 transition-opacity text-white w-full sm:w-auto"
          >
            Conheça Nosso Trabalho
          </Button>
          <Button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            size="lg"
            variant="outline"
            className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 w-full sm:w-auto"
          >
            Faça Parte
          </Button>
        </div>
      </div>
    </section>
  )
}

