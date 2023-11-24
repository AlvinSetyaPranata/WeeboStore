import { imageUrlResolver } from "@/utils/imageUrlResolver"
import Home from "./content"

export const metadata = {
  "title" : "Weebostore"
}


export async function getData() {
  const res = await fetch('http://127.0.0.1:8000/api/products')
  const data = await res.json()

  return data
}



export default async function Page() {
  const data = await getData()

  const newData = data.map((field) => {
    field.product_image = imageUrlResolver(field.product_image)

    return field
  })

  return <Home data={newData} />
}
