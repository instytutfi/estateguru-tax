import React, { type FC } from 'react'

import clsx from 'clsx'

const classNames = new Map([
  ['success', 'bg-emerald-100 text-emerald-900'],
  ['error', 'bg-red-100 text-red-900'],
  ['default', 'bg-slate-300 text-slate-900']
])

const Alert: FC<Props> = ({ title, content, status = 'default' }) => {
  return (
    <aside className={clsx('p-8 rounded-xl', classNames.get(status))}>
      {title != null && <h1 className="font-serif font-normal text-xl md:text-2xl">{title}</h1>}
      {content != null && <p className="text-base md:text-lg mt-4">{content}</p>}
    </aside>
  )
}

interface Props {
  title?: string
  content?: string
  status?: 'success' | 'error' | 'default'
}

export default Alert
