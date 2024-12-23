import Image from 'next/image'

export default function Footer() {
  return (
    <footer id="contato" className="bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 text-white py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.png"
            alt="Instituto Bem-Estar Social Logo"
            width={80}
            height={80}
            className="rounded-full mb-4 bg-white p-2"
          />
          <h3 className="text-2xl font-bold">Instituto Bem-Estar Social</h3>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-white/80">contato@institutobemestar.org</p>
            <p className="text-white/80">(82) 3221-5000</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Endereço</h4>
            <p className="text-white/80">Rua Dr. Pedro Monte, 67</p>
            <p className="text-white/80">Centro, Maceió/AL</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Links Úteis</h4>
            <div className="space-y-2">
              <p><a href="#" className="text-white/80 hover:text-white transition-colors">Política de Privacidade</a></p>
              <p><a href="#" className="text-white/80 hover:text-white transition-colors">Termos de Uso</a></p>
            </div>
          </div>
        </div>
        <div className="text-center mt-12 pt-8 border-t border-white/20">
          <p>&copy; 2024 Instituto Bem-Estar Social. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

