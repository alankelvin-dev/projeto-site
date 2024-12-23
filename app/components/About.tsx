import { Leaf, Heart, Users, Sun } from 'lucide-react'

export default function About() {
  const values = [
    { icon: Leaf, title: 'Sustentabilidade', description: 'Compromisso com o desenvolvimento sustentável' },
    { icon: Heart, title: 'Cuidado', description: 'Atenção e dedicação a cada pessoa' },
    { icon: Users, title: 'Comunidade', description: 'Fortalecimento dos laços sociais' },
    { icon: Sun, title: 'Esperança', description: 'Construindo um futuro melhor' },
  ]

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 bg-clip-text text-transparent">
          Nossa Missão
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 p-[2px] group-hover:scale-110 transition-transform">
                  <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            )
          })}
        </div>
        <p className="text-lg text-center max-w-3xl mx-auto text-gray-600">
          O Instituto Bem-Estar Social é dedicado a melhorar a qualidade de vida em nossa comunidade. 
          Através de programas inovadores e parcerias estratégicas, trabalhamos incansavelmente 
          para promover saúde, educação e desenvolvimento social para todos.
        </p>
      </div>
    </section>
  )
}

