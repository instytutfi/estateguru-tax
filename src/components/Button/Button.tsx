import React, { type ButtonHTMLAttributes, type FC, type ReactNode } from 'react'

import clsx from 'clsx'

const Button: FC<Props> = ({ disabled = false, secondary = false, icon, className, children, ...props }) => {
  return (
    <button
      disabled={disabled}
      className={clsx(
        'flex items-center px-10 py-4 bg-blue-600 text-lg text-white rounded-md font-medium hover:bg-blue-800 shadow-xl shadow-slate-200 transition-all',
        secondary && 'bg-yellow-500 hover:bg-yellow-700',
        disabled && 'bg-slate-400 hover:bg-slate-400',
        className
      )}
      {...props}
    >
      {icon} {children}
    </button>
  )
}

interface Props extends ButtonHTMLAttributes<any> {
  disabled?: boolean
  secondary?: boolean
  icon?: ReactNode
  children: ReactNode
}

export default Button
