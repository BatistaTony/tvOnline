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

  const showCurrentPage = (): React.ReactNode => {
    const page = pages.find(page => page.title === currentPage)

    if (page) {
      return page.content
    } else {
      return <h1>404 no found</h1>
    }
  }

  return <CustomLayout>{showCurrentPage()}</CustomLayout>
}

export default Page
