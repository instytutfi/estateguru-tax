const downloadBlob = (data: Blob, fileName: string): void => {
  const url = URL.createObjectURL(data)
  const a = document.createElement('a')

  a.href = url
  a.download = fileName

  const clickHandler = (): void => {
    setTimeout(() => {
      URL.revokeObjectURL(url)
      a.removeEventListener('click', clickHandler)
    }, 150)
  }

  a.addEventListener('click', clickHandler, false)
  a.click()
}

const useDownload = (): typeof downloadBlob => {
  return (data, fileName) => { downloadBlob(data, fileName) }
}

export {
  useDownload
}
