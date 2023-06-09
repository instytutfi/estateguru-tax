import React, { type FC, useMemo } from 'react'

import { useTranslation } from 'react-i18next'

import { GithubIcon, LinkedInIcon } from 'assets/icons'

import packageJson from '../../../package.json'

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
          <p className="my-6 text-slate-700 max-w-md">
            {t('footer.oss')}
          </p>
          <div className="flex flex-col items-start gap-4">
            <a
              className="flex gap-2 items-center text-slate-700 font-medium hover:text-blue-600 transition-all"
              href="https://github.com/instytutfi/estateguru-tax"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon className="h-5 w-5" /> Github
            </a>
            <a
              className="flex gap-2 items-center text-slate-700 font-medium hover:text-blue-600 transition-all"
              href="https://www.linkedin.com/company/instytut-fi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="h-5 w-5" /> LinkedIn
            </a>
          </div>
        </div>
        <p className="basis-1/2 text-sm text-slate-700 mt-12 md:mt-0">
          {t('footer.disclaimer')}
        </p>
      </div>
      <div className="container mt-8">
        <span className="block text-center mt-4 text-xs font-mono text-slate-500">
          {t('app.packageName')} {packageJson.version}
        </span>
      </div>
    </footer>
  )
}

export default Footer
