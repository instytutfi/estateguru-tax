import React, { type FC, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { GithubIcon } from 'assets/icons'

const fiLink = (
  <a
    key="fiLink"
    href="https://instytutfi.pl"
    target="_blank"
    rel="noopener noreferrer"
    className="border-b-2 border-b-yellow-500 hover:text-yellow-600 transition-all"
  >
    Instytut Fi
  </a>
)

const Footer: FC = () => {
  const { t } = useTranslation()
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-slate-300 py-12">
      <div className="container flex flex-col md:flex-row gap-8">
        <div className="basis-1/2 text-sm">
          <p className="font-serif text-base text-slate-900">
            {t('footer.copyright', { year, fiLink })}
          </p>
          <p className="my-6 text-slate-700">
            {t('footer.oss')}
          </p>
          <a
            className="inline-flex gap-2 items-center text-slate-700 font-medium hover:text-blue-600 transition-all"
            href="https://github.com/instytutfi/estateguru-tax"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-5 w-5" /> Github
          </a>
        </div>
        <p className="basis-1/2 text-sm text-slate-700 mt-12 md:mt-0">
          {t('footer.disclaimer')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
