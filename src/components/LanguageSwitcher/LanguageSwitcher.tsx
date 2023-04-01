import React, { type FC, Fragment } from 'react'

import { Menu, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

import { type LANG_CODES, LANG_ICONS } from 'common/constants'

const Item: FC<ItemProps> = ({ language }) => {
  const { i18n, t } = useTranslation()

  const handleClick = async (): Promise<void> => {
    await i18n.changeLanguage(language)
  }

  return (
    <Menu.Item>
      {({ active }) => (
        <button
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleClick}
          className={clsx(
            'flex w-full items-center rounded-md px-4 py-2 font-medium transition-all',
            !active && 'text-gray-900',
            active && 'bg-blue-600 text-white'
          )}
        >
          <span className="text-xl mr-2">
            {LANG_ICONS[language]}
          </span>
          {t(`languageSwitcher.${i18n.language}.${language}.label`)}
        </button>
      )}
    </Menu.Item>
  )
}

interface ItemProps {
  language: typeof LANG_CODES[number]
}

const LanguageSwitcher: FC = () => {
  const { i18n, t } = useTranslation()

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center text-slate-300 font-medium hover:text-blue-500 transition-all">
        <span className="text-xl mr-2">
          {LANG_ICONS[i18n.language as typeof LANG_CODES[number]]}
        </span>
        <span className="hidden sm:block">
          {t(`languageSwitcher.${i18n.language}.${i18n.language}.label`)}
        </span>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 mt-2 p-2 w-44 origin-top-right divide-y divide-gray-100 rounded-md bg-slate-50 shadow-2xl shadow-slate-800/40 ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <Item language="pl" />
          <Item language="en" />
        </Menu.Items>
      </Transition>
    </Menu>
  )
}

export default LanguageSwitcher
