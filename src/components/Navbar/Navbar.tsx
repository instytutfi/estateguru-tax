import React, { type FC, useState } from 'react'

import { CurrencyEuroIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import { GithubIcon } from 'assets/icons'

import { LanguageSwitcher } from 'components'

const Navbar: FC = () => {
  const { t } = useTranslation()
  const [isLogoHovered, setIsLogoHovered] = useState<boolean>(false)

  return (
    <nav className="bg-slate-800">
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          <div className="flex justify-between gap-8 items-center w-[100%]">
            <a
              href="/"
              onMouseEnter={() => { setIsLogoHovered(true) }}
              onMouseLeave={() => { setIsLogoHovered(false) }}
              className="flex-shrink-0 flex gap-2 items-center text-white hover:text-yellow-500 transition-all"
            >
              <CurrencyEuroIcon className={clsx('h-8 w-8', isLogoHovered && 'spin')} />
              <span className="font-serif sm:text-lg md:text-xl">
                {t('app.name')}
              </span>
            </a>
            <div className="flex items-center gap-8">
              <LanguageSwitcher />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/instytutfi/estateguru-tax"
                className="text-slate-500 hover:text-white transition-all"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
