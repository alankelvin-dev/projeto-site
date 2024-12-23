import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Brain, BookOpen, Heart, Users, Bike, Palette, Apple, Sprout } from 'lucide-react'

export default function Services() {
  const services = [
    { 
      title: "Saúde Mental",
      description: "Programas de apoio e terapia para promover o bem-estar emocional.",
      icon: Brain,
      gradient: "from-blue-600 to-blue-400"
    },
    { 
      title: "Educação",
      description: "Cursos e workshops para desenvolvimento pessoal e profissional.",
      icon: BookOpen,
      gradient: "from-green-600 to-green-400"
    },
    { 
      title: "Assistência Social",
      description: "Suporte para famílias e indivíduos em situação de vulnerabilidade.",
      icon: Heart,
      gradient: "from-orange-500 to-orange-300"
    },
    { 
      title: "Integração",
      description: "Atividades que promovem a união e fortalecimento comunitário.",
      icon: Users,
      gradient: "from-purple-600 to-purple-400"
    },
    { 
      title: "Esporte e Lazer",
      description: "Atividades físicas e recreativas para todas as idades.",
      icon: Bike,
      gradient: "from-red-500 to-red-300"
    },
    { 
      title: "Arte e Cultura",
      description: "Expressão artística e valorização da cultura local.",
      icon: Palette,
      gradient: "from-yellow-500 to-yellow-300"
    },
    { 
      title: "Alimentação Saudável",
      description: "Orientação nutricional e segurança alimentar.",
      icon: Apple,
      gradient: "from-emerald-600 to-emerald-400"
    },
    { 
      title: "Sustentabilidade",
      description: "Projetos ambientais e educação ecológica.",
      icon: Sprout,
      gradient: "from-teal-600 to-teal-400"
    }
  ]

  return (
    <section id="servicos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 bg-clip-text text-transparent">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-300 border-none bg-gradient-to-br from-white to-gray-50">
                <CardHeader>
                  <div className={`w-14 h-14 mb-4 rounded-full bg-gradient-to-r ${service.gradient} p-[2px] group-hover:scale-110 transition-transform`}>
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
                      <Icon className="h-7 w-7 text-blue-600" />
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

