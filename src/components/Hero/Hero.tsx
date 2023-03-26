import React, { type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { RevenueImage } from 'assets/images'

const Hero: FC = () => {
  const { t } = useTranslation()

  return (
    <section className="section container flex flex-col md:flex-row items-center gap-4">
      <div className="md:basis-1/2 w-[100%] py-8 md:py-12 bg-gradient-to-bl from-slate-100 to-blue-200 rounded-tr-xl rounded-tl-[8rem] rounded-bl-xl rounded-br-[8rem]">
        <RevenueImage className="max-h-[300px] max-w-md w-[100%] mx-auto" />
      </div>
      <div className="md:basis-1/2 sm:px-8 md:p-12">
        <p className="text-2xl md:text-4xl tracking-tight font-serif text-blue-600 mb-4">
          {t('hero.title')}
        </p>
        <p className="md:text-lg font-medium">
          {t('hero.description')}
        </p>
      </div>
    </section>
  )
}

export default Hero
