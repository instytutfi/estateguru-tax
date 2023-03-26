import React, { type FC } from 'react'

import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'

const FaqItem: FC<ItemProps> = ({ faqKey }) => {
  const { t } = useTranslation()

  return (
    <div className="my-4 md:my-6">
      <Disclosure>
        <Disclosure.Button className="flex w-[100%] items-center justify-between font-serif text-left text-slate-600 ui-open:text-blue-600 text-xl border-b-2 border-b-slate-200 ui-open:border-b-blue-500 py-2 hover:border-b-slate-300 transition-all">
          {t(`faq.${faqKey}.title`)}
          <ChevronDownIcon className="flex-shrink-0 h-5 w-5 transition-all text-slate-400 ui-open:text-inherit ui-open:rotate-180" />
        </Disclosure.Button>
        <Disclosure.Panel className="py-4 text-slate-800">
          <p className="md:text-lg">{t(`faq.${faqKey}.answer`)}</p>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}

interface ItemProps {
  faqKey: string
}

const Faq: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="section">
      <div className="container-xs">
        <h2 className="text-2xl md:text-4xl text-center font-serif mb-8">
          {t('faq.title')}
        </h2>
        <FaqItem faqKey="gettingStatement" />
        <FaqItem faqKey="calculationDetails" />
        <FaqItem faqKey="deductions" />
        <FaqItem faqKey="pricing" />
        <FaqItem faqKey="data" />
        <FaqItem faqKey="related" />
      </div>
    </div>
  )
}

export default Faq
