import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function AtaPage() {
  return (
    <main className="min-h-screen bg-[#FAFBFF] py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 bg-clip-text text-transparent">
            ATA DA ASSEMBLEIA GERAL DO INSTITUTO BEM-ESTAR SOCIAL
          </h1>
          
          <div className="bg-white shadow-lg rounded-xl p-8">
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                CNPJ n° 17.630.105/0001-27
              </p>
              
              <p className="text-gray-600 mb-6">
                Ao primeiro dia de março de 2024, no endereço localizado na Rua Dr. Pedro Monte, nº 67,
                sala 05, Cd. José Luiz Lessa, Centro, Maceió/AL, CEP 57020-380, estavam presentes os
                convocados através de edital publicado no dia 15 de janeiro de 2024.
              </p>

              <h2 className="text-xl font-semibold mb-4 text-blue-600">Diretoria Executiva Eleita</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Presidente:</strong> Marcella Tarcila de Oliveira Félix</li>
                <li><strong>Vice-Presidente:</strong> Elizabeth Monteiro Nunes Bezerra</li>
                <li><strong>Primeira Secretária:</strong> Andresa Alves Pedrosa de Araújo Silva</li>
                <li><strong>Segundo Secretário:</strong> João Gonçalves de Melo Neto</li>
                <li><strong>Primeiro Tesoureiro:</strong> Lucas Gabriel Gonçalves Silva</li>
                <li><strong>Segundo Tesoureiro:</strong> José Cícero Lopes de Oliveira</li>
              </ul>

              <h2 className="text-xl font-semibold mb-4 text-blue-600">Conselho Fiscal</h2>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                <li><strong>Primeiro membro:</strong> Larissa Araújo de Brito Melo</li>
                <li><strong>Segundo membro:</strong> Juliana Alves da Silva</li>
                <li><strong>Terceiro membro:</strong> Ednelza Inácio de Lima</li>
              </ul>

              <div className="mt-8 text-sm text-gray-500">
                <p>Documento registrado em cartório</p>
                <p>4º Ofício de Notas e 1º RTDPJ de Maceió/AL</p>
                <p>Protocolo nº 8441066, Livro A em 13/03/2024</p>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button className="bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 text-white hover:opacity-90 transition-opacity flex items-center gap-2">
                <Download size={20} />
                Download da Ata Completa
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

