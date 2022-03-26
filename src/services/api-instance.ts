import axios from 'axios'

const getApi = () => {
  const url = process.env.NEXT_PUBLIC_API_URL
  const instance = axios.create({
    baseURL: url
  })

  // can be an interceptor here to add a token or a key

  return instance
}

export default getApi
