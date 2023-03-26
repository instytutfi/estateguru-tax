import React, { type FC, type ReactNode } from 'react'

const Card: FC<Props> = ({ title, subtitle, children = null }) => {
  return (
    <div className="p-8 md:p-12 bg-slate-50 rounded-2xl shadow-2xl shadow-slate-200">
      <div className="mb-16">
        <h2 className="text-2xl md:text-4xl font-serif tracking-tight text-slate-900">{title}</h2>
        {subtitle != null && <p className="mt-2 font-medium text-slate-500">{subtitle}</p>}
      </div>
      {children}
    </div>
  )
}

interface Props {
  title: string
  subtitle?: string
  children?: ReactNode
}

export default Card
