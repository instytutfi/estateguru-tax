import React, { type FC, type HTMLProps } from 'react'

import clsx from 'clsx'

const Exposition: FC<Props> = ({ value, label, important = false, ...props }) => {
  return (
    <div {...props}>
      <span
        className={clsx(
          'block text-2xl md:text-3xl font-serif',
          !important && 'text-slate-700',
          important && 'text-blue-600'
        )}
      >
        {value}
      </span>
      <span className="font-medium text-slate-600">
        {label}
      </span>
    </div>
  )
}

interface Props extends HTMLProps<any> {
  value: string
  label: string
  important?: boolean
}

export default Exposition
