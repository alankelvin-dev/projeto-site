import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

export default function Ata() {
  const handleDownload = () => {
    // Implementação real do download seria feita aqui
    console.log("Iniciando download da ata...")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">ATA DA ASSEMBLEIA GERAL DO INSTITUTO DE BEM ESTAR SOCIAL</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="mb-4">CNPJ n° 17.630.105/0001-27</p>
        <p className="mb-4">
          Ao primeiro dia de março de 2024, no endereço localizado na Rua Dr. Pedro Monte, nº 67,
          sala 05, Cd. José Luiz Lessa, Centro, Maceió/AL, CEP 57020-380, estavam presentes os
          convocados através de edital publicado no dia 15 de janeiro de 2024, para deliberarem
          sobre a seguinte pauta: 1) ELEIÇÃO DE DIRETORIA EXECUTIVA E CONSELHO FISCAL.
        </p>
        <p className="mb-4">
          Iniciados os trabalhos, elegeu-se para presidir a Assembleia a Srª Marcella Tarcila
          de Oliveira Félix e para secretariar a Srª Elizabeth Monteiro Nunes Bezerra, por aclamação.
        </p>
        <p className="mb-4">
          Durante a Assembleia, verificou-se que uma única chapa se apresentou como candidata,
          sendo chapa única, que foi aclamada pela Assembleia Geral, tendo sido eleita para
          compor a Diretoria Executiva do Instituto de Bem-Estar Social para o período 2024-2027:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Presidente:</strong> MARCELLA TARCILA DE OLIVEIRA FÉLIX, brasileira, divorciada, assistente social, portadora do RG: 2001001209374 SSP/AL e CPF 071.011.584-98, residente e domiciliada na Rua Radialista Clemente Aleluia, 57, Vergel do Lago, Maceió/AL, CEP 57015-330;</li>
          <li><strong>Vice-Presidente:</strong> ELIZABETH MONTEIRO NUNES BEZERRA, brasileira, casada, portadora do RG n° 112568175 IFP/RJ, CPF n° 053.506.447-00, residente e domiciliada na Rua Maria Ramos de Lima, 72, bloco 11, apartamento 201, Antares, Maceió/AL, CEP 57048-360;</li>
          <li><strong>Primeira Secretária:</strong> ANDRESA ALVES PEDROSA DE ARAÚJO SILVA, brasileira, em união estável, advogada, portadora do RG n° 1246344 SSP/AL e CPF n° 001.054.684-79, residente e domiciliada na Avenida Roberto Mascarenhas de Brito n° 426, ap. 704, bloco 002, Edifício Mahatma Gandhi, Maceió/AL, CEP 57035-851;</li>
          <li><strong>Segundo Secretário:</strong> JOÃO GONÇALVES DE MELO NETO, brasileiro, casado, educador físico, portador do RG n° 99001247599 SSP/AL e CPF n° 077.298.994-00, residente e domiciliado na Avenida Júlio Marques Luz, 877, ap 805, Edifício Tapajós, Jatiúca, Maceió/AL, CEP 57035-700;</li>
          <li><strong>Primeiro Tesoureiro:</strong> LUCAS GABRIEL GONÇALVES SILVA, brasileiro, solteiro, estudante, portador do RG n° 33137919 IFP/RJ e do CPF n° 50.514.994-06, residente e domiciliado na Rua Clístenes de Miranda Pinto, Edifício Piauí, s/n, apartamento 202, Maceió/AL, CEP 57020-500;</li>
          <li><strong>Segundo Tesoureiro:</strong> JOSÉ CÍCERO LOPES DE OLIVEIRA, brasileiro, casado, autônomo, portador do RG n° 935315 SSP/AL e CPF n° 777.780.494-49, residente e domiciliado na Avenida Roberto Mascarenhas de Brito, n° 426, ap. 704, bloco 0002, Edifício Mahatma Gandhi, Maceió/AL, CEP 57035-851.</li>
        </ul>
        <p className="mb-4">
          Bem como restaram eleitos para compor o CONSELHO FISCAL para o mesmo período a seguinte composição, sob a presidência do primeiro:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li><strong>Primeiro membro do Conselho Fiscal:</strong> LARISSA ARAÚJO DE BRITO MELO, brasileira, casada, autônoma, portadora do RG nº 2003001010365 SEDS/AL e CPF n° 014.183.265-96, residente e domiciliada no Conjunto José Tenório, bloco 13, ap 204, Serraria, Maceió/AL, CEP 57046-350;</li>
          <li><strong>Segundo membro do Conselho Fiscal:</strong> JULIANA ALVES DA SILVA, brasileira, casada, secretária, portadora do RG n° 3522369-3 SSP/AL e do CPF n° 090.576.624-50, residente e domiciliada no Residencial Parque Petrópolis 1, bloco 02, ap. 301, Petrópolis, Maceió/AL, CEP 57062-591;</li>
          <li><strong>Terceiro membro do Conselho Fiscal:</strong> EDNELZA INÁCIO DE LIMA, brasileira, solteira, técnica de enfermagem, portadora do RG n° 164373317-08 SSP/AL e CPF: 903.214.724-20, residente e domiciliada na Rua Pedro Américo, 421, Poço, Maceió/AL, CEP 57025-890.</li>
        </ul>
        <p className="mb-4">
          E nada mais tendo a ser dito, deu-se por encerrada a reunião. Eu, Elizabeth Monteiro Nunes Bezerra, lavrei a presente, que, lida e achada conforme, vai subscrita pelos eleitos.
        </p>
        <div className="mt-6 space-y-2">
          <p>MARCELLA TARCILA DE OLIVEIRA FÉLIX</p>
          <p>Presidente da Assembleia</p>
          <p>Presidente da Diretoria Executiva</p>
        </div>
        <div className="mt-4 space-y-2">
          <p>ELIZABETH MONTEIRO NUNES BEZERRA</p>
          <p>Secretária da Assembleia</p>
          <p>Vice-Presidente da Diretoria Executiva</p>
        </div>
        <div className="mt-4 space-y-2">
          <p>ANDRESA ALVES PEDROSA DE ARAÚJO SILVA</p>
          <p>Primeira Secretária da Diretoria Executiva</p>
        </div>
        <div className="mt-4 space-y-2">
          <p>JOÃO GONÇALVES DE MELO NETO</p>
          <p>Segundo Secretário da Diretoria Executiva</p>
        </div>
        <div className="mt-4 space-y-2">
          <p>LUCAS GABRIEL GONÇALVES SILVA</p>
          <p>Primeiro Tesoureiro da Diretoria Executiva</p>
        </div>
        <div className="mt-4 space-y-2">
          <p>JOSÉ CÍCERO LOPES DE OLIVEIRA</p>
          <p>Segundo Tesoureiro da Diretoria Executiva</p>
        </div>
        <div className="mt-4 space-y-2">
          <p>LARISSA ARAÚJO DE BRITO MELO</p>
          <p>Primeiro membro do Conselho Fiscal</p>
        </div>
        <div className="mt-4 space-y-2">
          <p>JULIANA ALVES DA SILVA</p>
          <p>Segundo membro do Conselho Fiscal</p>
        </div>
        <div className="mt-4 space-y-2">
          <p>EDNELZA INÁCIO DE LIMA</p>
          <p>Terceiro membro do Conselho Fiscal</p>
        </div>
        <div className="mt-6 text-sm text-gray-600 border-t pt-4">
          <p>CARTÓRIO DO 4º OFÍCIO DE NOTAS E 1º RTDPJ DE MACEIÓ/AL</p>
          <p>Bel. Lucas Barros Pimentel - Tabelião e Oficial de Registro</p>
          <p>Rua do Sol, 136, Centro, Maceió/AL - CEP 57020-460</p>
          <p>Protocolo nº 8441066, Livro A em 13/03/2024,</p>
          <p>Averbado no registro sob nº 5H021, O que</p>
          <p>certifico e dou fé, Maceió AL, 13/03/2024</p>
          <p>Lucymara Alves - Substituta</p>
        </div>
        <div className="mt-8 flex justify-center">
          <Button onClick={handleDownload} className="flex items-center gap-2">
            <Download size={20} />
            Download da Ata
          </Button>
        </div>
      </div>
    </div>
  )
}

