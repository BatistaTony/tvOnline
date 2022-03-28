import { GlobalContext } from 'context/gloabl.context'
import { CustomLayout } from 'Layout/layout'
import { useContext } from 'react'

const pages = [
  {
    title: 'sports',
    content: <h1>Sports page</h1>
  },
  {
    title: 'movies',
    content: <h1>movies page</h1>
  }
]

const Page = () => {
  const { currentPage } = useContext(GlobalContext)

  return <CustomLayout></CustomLayout>
}

export default Page
