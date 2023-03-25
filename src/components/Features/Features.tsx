import React, { type FC } from 'react'

import { BoltIcon, CircleStackIcon, VariableIcon } from '@heroicons/react/24/outline'

import {
  CypressIcon, I18NextIcon,
  ReactHookFormIcon,
  ReactIcon,
  ReactRouterIcon,
  StorybookIcon, TailwindCSSIcon,
  TypeScriptIcon,
  ViteIcon
} from 'assets/icons'

const features = [
  {
    name: 'TypeScript',
    description: 'The project runs on latest TypeScript for that sweet, sweet typing safety.',
    icon: TypeScriptIcon,
    url: 'https://www.typescriptlang.org/'
  },
  {
    name: 'Vite + Vitest',
    description: 'Fi Starter uses Vite as the bundler and Vitest as a test runner, for lightning fast build and even faster tests!',
    icon: ViteIcon,
    url: 'https://vitejs.dev'
  },
  {
    name: 'Storybook',
    description: 'Storybooks are there, ready for you to create that beautiful documentation that everyone will love.',
    icon: StorybookIcon,
    url: 'https://storybook.js.org'
  },
  {
    name: 'Plop Generators',
    description: 'No more manually creating thousands of files and folders. Need a new component? You\'ve got it! A new store? Here you are!',
    icon: BoltIcon,
    url: 'https://plopjs.com/'
  },
  {
    name: 'React',
    description: 'The industry-standard front end framework. Because you can\'t go wrong with React!',
    icon: ReactIcon,
    url: 'https://reactjs.org'
  },
  {
    name: 'React Router',
    description: 'YAIS (Another industry standard)! Easily route your pages, create nested routes, layouts, and much more.',
    icon: ReactRouterIcon,
    url: 'https://reactrouter.com'
  },
  {
    name: 'Cypress',
    description: 'Cypress is configured and ready for you to provide all that End-to-End testing goodness for your app.',
    icon: CypressIcon,
    url: 'https://cypress.io/'
  },
  {
    name: 'Jotai',
    description: 'A new kid on the block that will help you take your state managament to the next level. Trust us, you\'ll love it.',
    icon: CircleStackIcon,
    url: 'https://jotai.org/'
  },
  {
    name: 'React Hook Form',
    description: 'Long gone are the days of the dreaded form-handling in React. With RHF you\'ll be able to do magic you didn\'t think was possible.',
    icon: ReactHookFormIcon,
    url: 'https://react-hook-form.com/'
  },
  {
    name: 'yup',
    description: 'Yup, you heard that right! A schema builder for runtime value parsing and validation — great for working with forms, external resources, etc.',
    icon: VariableIcon,
    url: 'https://github.com/jquense/yup'
  },
  {
    name: 'react-i18next',
    description: 'The Starter is pre-configured with react-i18next and ready to handle multi-language translations. In case you need it ;)',
    icon: I18NextIcon,
    url: 'https://react.i18next.com/'
  },
  {
    name: 'Tailwind CSS',
    description: 'While you can pick a UI framework of your choice, we also provide Tailwind CSS integration if you feel like doing some manual designing.',
    icon: TailwindCSSIcon,
    url: 'https://tailwindcss.com/'
  }
]

const Features: FC = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">
            Tech Stack
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to kickstart your next app
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 md:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute top-0 left-0 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-indigo-900 shadow-lg shadow-indigo-700/50">
                    <feature.icon className="h-5 w-5 text-white" aria-hidden="true" />
                  </div>
                  <a
                    href={feature.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-indigo-700 border-b-current"
                  >
                    {feature.name}
                  </a>
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default Features
