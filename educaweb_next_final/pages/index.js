import React, { useState } from 'react'
import CourseCard from '../components/CourseCard'

const COURSES = [
  { id: 'dev', title: 'Desenvolvimento Web', subtitle: 'Aprenda HTML, CSS e JavaScript do zero', desc: 'Crie sites e aplicações modernas usando as tecnologias mais pedidas pelo mercado.', price: '25.00' },
  { id: 'marketing', title: 'Marketing Digital', subtitle: 'Domine anúncios e tráfego', desc: 'Aprenda a planejar e executar campanhas que geram resultados reais para negócios.', price: '20.00' },
  { id: 'design', title: 'Design Gráfico', subtitle: 'Criação de logos e banners', desc: 'Técnicas práticas de design para Web e redes sociais, do conceito ao arquivo final.', price: '15.00' },
]

export default function Home() {
  const [modal, setModal] = useState(null)
  const pixKey = process.env.NEXT_PUBLIC_PIX_KEY || ''
  const pixContact = decodeURIComponent(process.env.NEXT_PUBLIC_PIX_CONTACT || 'EducaWeb%20Cursos')

  function handlePay(course) {
    setModal({ title: course.title, price: course.price, pixKey })
  }

  function closeModal() { setModal(null) }

  function makePaymentString() {
    if(!modal) return ''
    return `Pagamento para ${pixContact} - ${modal.title} - R$ ${modal.price} - Pix: ${modal.pixKey}`
  }

  return (
    <div className="min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">EducaWeb Cursos</h1>
            <p className="text-sm text-gray-500">Invista no seu futuro com conhecimento de qualidade.</p>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="text-center">
          <h2 className="text-3xl font-extrabold">Invista no seu futuro com conhecimento de qualidade</h2>
          <p className="mt-4 text-gray-700">Nossos cursos online oferecem conteúdo completo, linguagem acessível e foco total em resultados. Escolha o curso ideal, gere o Pix e comece agora.</p>
        </section>

        <section id="cursos" className="mt-12">
          <h3 className="text-2xl font-bold mb-6">Cursos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COURSES.map(c => <CourseCard key={c.id} course={c} onPay={handlePay} />)}
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t mt-12 py-6">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-600">
          © {process.env.NEXT_PUBLIC_YEAR || '2025'} EducaWeb Cursos — Todos os direitos reservados
        </div>
      </footer>

      {modal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md">
            <h4 className="text-lg font-semibold">Pagamento — {modal.title}</h4>
            <p className="mt-2">Valor: R$ {modal.price}</p>
            <p className="mt-2 text-xs text-gray-500">Chave Pix (não incluída no código):</p>
            <div className="mt-2 p-3 bg-gray-100 rounded text-sm break-words">{modal.pixKey ? modal.pixKey : '[COLE_SUA_CHAVE_PIX_AQUI]'}</div>

            <div className="mt-4 flex gap-2 justify-end">
              <button onClick={() => { navigator.clipboard.writeText(makePaymentString()); alert('Texto de pagamento copiado!') }} className="px-4 py-2 border rounded">Copiar texto</button>
              <button onClick={() => { if(modal.pixKey) { navigator.clipboard.writeText(modal.pixKey); alert('Chave Pix copiada!') } else { alert('Cole sua chave Pix no arquivo .env.local ou em Vercel') } }} className="px-4 py-2 bg-blue-600 text-white rounded">Copiar chave</button>
              <button onClick={closeModal} className="px-4 py-2 border rounded">Fechar</button>
            </div>

            <p className="mt-3 text-xs text-gray-500">Dica: abra seu aplicativo bancário, cole a chave copiada e gere o QR Code para pagamento.</p>
          </div>
        </div>
      )}
    </div>
  )
}
