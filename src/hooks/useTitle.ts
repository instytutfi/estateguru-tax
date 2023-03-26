import { useEffect } from 'react'

import { useTranslation } from 'react-i18next'

const useTitle = (title: string): void => {
  const { t } = useTranslation()
  const baseName = t('app.name')
  useEffect(() => { document.title = `${title} — ${baseName}` }, [title])
}

export {
  useTitle
}
