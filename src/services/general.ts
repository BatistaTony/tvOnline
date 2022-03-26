import getApi from './api-instance'

export const getData = async (): Promise<unknown> => {
  const data = await getApi().get('/data')

  return data
}
