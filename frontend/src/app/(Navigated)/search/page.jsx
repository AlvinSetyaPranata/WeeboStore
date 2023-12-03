import Search from './content'

export const metadata = {
    "title" : "Weebostore - Search"
}

export default function Page({searchParams}) {
    console.log(searchParams)

  return <Search />
}
