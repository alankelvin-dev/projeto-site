'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (sectionId: string) => {
    if (pathname !== '/') {
      router.push('/')
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b border-blue-100">
      <nav className="container mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Instituto Bem-Estar Social Logo"
            width={48}
            height={48}
            className="rounded-full"
            priority
          />
          <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 bg-clip-text text-transparent">
            Instituto Bem-Estar Social
          </span>
        </Link>
        <div className="flex items-center space-x-4 sm:space-x-6">
          <button 
            onClick={() => scrollToSection('sobre')}
            className="text-blue-700 hover:text-green-500 transition-colors text-sm sm:text-base"
          >
            Sobre
          </button>
          <button 
            onClick={() => scrollToSection('servicos')}
            className="text-blue-700 hover:text-green-500 transition-colors text-sm sm:text-base"
          >
            Serviços
          </button>
          <Link 
            href="/ata" 
            className="text-blue-700 hover:text-green-500 transition-colors text-sm sm:text-base"
          >
            Ata
          </Link>
          <Button 
            onClick={() => scrollToSection('contato')}
            className="bg-gradient-to-r from-blue-600 via-green-500 to-orange-500 text-white hover:opacity-90 transition-opacity"
            size="sm"
          >
            Contato
          </Button>
        </div>
      </nav>
    </header>
  )
}

