import React, { type FC, useCallback, useMemo, useState } from 'react'

import { ArrowUpOnSquareIcon, DocumentCheckIcon, ArrowLongDownIcon, CogIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { csvParse } from 'd3'
import { type FieldError, type SubmitHandler, useForm } from 'react-hook-form'

interface FormValues {
  csvFile: FileList
}

const FileUpload: FC<Props> = ({ onSubmit }) => {
  const [isCalculating, setIsCalculating] = useState(false)
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ mode: 'all' })

  const onSubmitHandler: SubmitHandler<FormValues> = data => {
    setIsCalculating(true)
    const reader = new FileReader()
    reader.onload = (e) => {
      const text = e?.target?.result as string
      const parsed = csvParse(text ?? '')
      onSubmit(parsed)
    }
    reader.readAsText(data.csvFile[0])
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
    return file?.name ?? 'Drop file to attach, or click to browse'
  }, [getFile])

  return (
    // @ts-expect-error TS complains for onSubmitHandler type definition
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form className="container flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmitHandler)}>
      <label
        className={clsx(
          'flex w-[100%] justify-center py-12 px-8 border-2 rounded-xl appearance-none cursor-pointer focus:outline-none transition-all',
          !isFileUploaded && 'bg-slate-50 text-slate-600 border-dashed border-slate-300 hover:border-slate-500',
          (isFileUploaded && error == null) && 'bg-green-100 border-green-200 text-green-700 border-solid hover:border-green-500',
          error != null && 'bg-red-100 border-red-200 border-dashed text-red-700 hover:border-red-500',
          isCalculating && 'pointer-events-none'
        )}
      >
        <span className="flex flex-col sm:flex-row items-center gap-2">
          <Icon className="w-8 h-8" />
          <span className="font-medium break-all">
            {getFileName(watch('csvFile'))}
          </span>
        </span>
        <input
          {...register(
            'csvFile',
            {
              required: true,
              validate: {
                isCsv: (files) => files[0]?.type === 'text/csv' || 'Only CSV files are accepted'
              }
            }
          )}
          disabled={isCalculating}
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
      <button
        disabled={!isFileUploaded || isCalculating || error != null}
        className={clsx(
          'flex items-center px-10 py-4 bg-blue-600 text-lg text-white rounded-md font-medium hover:bg-blue-800 transition-all',
          (!isFileUploaded || isCalculating || error != null) && 'bg-slate-400 hover:bg-slate-400'
        )}
        type="submit"
      >
        <CogIcon className={clsx('w-7 h-7 mr-2', isCalculating && 'spin')} /> Calculate the Tax
      </button>
    </form>
  )
}

interface Props {
  onSubmit: (data: Array<Record<string, any>>) => any
}

export default FileUpload
