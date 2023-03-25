import React, { type FC } from 'react'

import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, HomeIcon, CurrencyEuroIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { useTranslation } from 'react-i18next'

const navigation = [
  { name: 'menu.home', href: '/', current: true },
  { name: 'menu.about', href: '/about', current: false }
]

const Navbar: FC = () => {
  const { t } = useTranslation()

  return (
    <Disclosure as="nav" className="bg-slate-800">
      {({ open }) => (
        <>
          <div className="container">
            <div className="flex h-20 items-center justify-between">
              <div className="flex justify-between items-center w-[100%]">
                <div className="flex-shrink-0 flex gap-1 items-center text-white">
                  <HomeIcon className="h-7 w-7" />
                  <ChevronRightIcon className="h-5 w-5 ml-0.5" />
                  <CurrencyEuroIcon className="h-7 w-7" />
                  <span className="font-bold ml-2 hidden md:block">
                    {t('app.name')}
                  </span>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={clsx(
                          item.current && 'bg-slate-900 text-white',
                          !item.current && 'text-slate-300 hover:bg-slate-700 hover:text-white',
                          'rounded-md px-5 py-3 transition-all font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {t(item.name)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="sr-only">Open main menu</span>
                  {open
                    ? <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    : <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  }
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={clsx(
                    item.current && 'bg-slate-900 text-white',
                    !item.current && 'text-slate-300 hover:bg-slate-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium transition-all'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {t(item.name)}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
