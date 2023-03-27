import React, { forwardRef, type InputHTMLAttributes } from 'react'

import clsx from 'clsx'

const Checkbox = forwardRef<HTMLDivElement, Props>((
  { name, label, ...props },
  ref
) => {
  return (
    <div className="flex items-center gap-2" ref={ref}>
      <input
        id={name}
        name={name}
        type="checkbox"
        className={clsx(
          'h-4 w-4 rounded border-slate-300 text-blue-600 focus:ring-blue-300 cursor-pointer',
          props.disabled === true && 'text-slate-500 focus:ring-slate-400 pointer-events-none'
        )}
        {...props}
      />
      <label
        htmlFor={name}
        className={clsx('text-slate-600 cursor-pointer', props.disabled === true && 'pointer-events-none')}
      >
        {label}
      </label>
    </div>
  )
})

Checkbox.displayName = 'Checkbox'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
}

export default Checkbox
