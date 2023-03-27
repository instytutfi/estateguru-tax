import React, { type FC } from 'react'

import { useTranslation } from 'react-i18next'

import { useTitle } from 'hooks/useTitle'

import { DefaultLayout } from 'layouts'

import { Calculate, Faq, Hero } from 'components'

const Page: FC = () => {
  const { t } = useTranslation()

  useTitle(t('menu.home'))

  return (
    <DefaultLayout>
      <Hero />
      <Calculate />
      <Faq />
    </DefaultLayout>
  )
}

const documentProps = {
  title: 'Rozlicz Estateguru'
}

export {
  Page,
  documentProps
}
