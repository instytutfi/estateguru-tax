import React, { type FC, useCallback, useMemo } from 'react'

import {
  ArrowUpOnSquareIcon,
  DocumentCheckIcon,
  ArrowLongDownIcon,
  CogIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { csvParse } from 'd3'
import { type FieldError, type SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import Button from '../Button'

interface FormValues {
  csvFile: FileList
}

const FileUpload: FC<Props> = ({ onSubmit, onReset, isCalculating, isCalculated }) => {
  const { t } = useTranslation()
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm({ mode: 'all' })

  const onSubmitHandler: SubmitHandler<FormValues> = data => {
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e?.target?.result as string
      const parsed = csvParse(text ?? '')
      onSubmit(parsed)
    }
    reader.readAsText(data.csvFile[0])
  }

  const handleReset = (): void => {
    reset()
    onReset()
  }

  const isFileUploaded = watch('csvFile')?.length > 0

  const error = useMemo<FieldError | undefined>(() => errors.csvFile as FieldError, [errors.csvFile])

  const Icon = useMemo(() => {
    if (error != null) return ExclamationTriangleIcon
    return isFileUploaded ? DocumentCheckIcon : ArrowUpOnSquareIcon
  }, [isFileUploaded, error])

  const getFile = useCallback((field?: FileList): File | undefined => {
    if (field == null || field.length === 0) return undefined
    return field[0]
  }, [])

  const getFileName = useCallback((field?: FileList) => {
    const file = getFile(field)
    return file?.name ?? t('form.file.label')
  }, [getFile])

  return (
    // @ts-expect-error TS complains for onSubmitHandler type definition
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="section container flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmitHandler)}>
      <label
        className={clsx(
          'flex w-[100%] justify-center py-12 px-8 border-2 rounded-xl appearance-none cursor-pointer focus:outline-none transition-all',
          !isFileUploaded && 'bg-slate-50 text-slate-600 border-dashed border-slate-300 hover:border-slate-500',
          (isFileUploaded && error == null) && 'bg-green-100 border-green-200 text-green-700 border-solid hover:border-green-500',
          error != null && 'bg-red-100 border-red-200 border-dashed text-red-700 hover:border-red-500',
          (isCalculating || isCalculated) && 'pointer-events-none'
        )}
      >
        <span className="flex flex-col sm:flex-row items-center gap-2">
          <Icon className="w-8 h-8" />
          <span className="font-medium break-all text-center">
            {getFileName(watch('csvFile'))}
          </span>
        </span>
        <input
          {...register(
            'csvFile',
            {
              required: true,
              validate: {
                isCsv: (files) => files[0]?.type === 'text/csv' ?? t('form.file.errors.format')
              }
            }
          )}
          disabled={isCalculating || isCalculated}
          type="file"
          accept="text/csv"
          className="hidden"
        />
      </label>
      {error != null && (
        <span className="mt-2 text-sm text-red-700">
          {error.message as string}
        </span>
      )}
      <ArrowLongDownIcon className="h-12 my-12 text-slate-400" />
      {!isCalculated && (
        <Button
          disabled={!isFileUploaded || isCalculating || error != null || isCalculated}
          icon={<CogIcon className={clsx('w-7 h-7 mr-2', isCalculating && 'spin')} />}
          type="submit"
        >
          {t('form.submit.label')}
        </Button>
      )}
      {isCalculated && (
        <Button
          secondary
          icon={<ArrowPathIcon className="w-7 h-7 mr-2" />}
          onClick={handleReset}
        >
          {t('form.reset.label')}
        </Button>
      )}
    </form>
  )
}

interface Props {
  onSubmit: (data: Array<Record<string, any>>) => any
  onReset: () => void
  isCalculating: boolean
  isCalculated: boolean
}

export default FileUpload
