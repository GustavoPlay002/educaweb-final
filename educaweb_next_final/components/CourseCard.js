import React from 'react'

export default function CourseCard({ course, onPay }) {
  return (
    <article className="bg-white p-6 rounded-xl shadow-md">
      <h4 className="text-lg font-semibold">{course.title}</h4>
      <p className="text-sm text-gray-500 mt-1">{course.subtitle}</p>
      <p className="mt-3 text-sm">{course.desc}</p>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="text-2xl font-bold">R$ {course.price}</div>
          <div className="text-xs text-gray-500">Pagamento via Pix</div>
        </div>
        <div className="flex gap-2">
          <button onClick={() => onPay(course)} className="px-4 py-2 bg-blue-600 text-white rounded">Gerar Pix</button>
        </div>
      </div>
    </article>
  )
}
