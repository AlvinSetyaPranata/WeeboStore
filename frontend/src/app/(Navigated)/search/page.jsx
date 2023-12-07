import Search from './content'

export const metadata = {
    "title" : "Weebostore - Search"
}

export default function Page({searchParams}) {

  return <Search title={searchParams.product ? searchParams.product : 'Search'} />
}
