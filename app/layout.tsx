import './globals.css'
import Header from './components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Instituto Bem-Estar Social</title>
      </head>
      <body className="min-h-screen bg-[#FAFBFF]">
        <Header />
        {children}
      </body>
    </html>
  )
}

