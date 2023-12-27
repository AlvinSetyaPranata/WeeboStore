import imageUrlResolver from "@/utils/imageUrlResolver"
import Home from "./content"

export const metadata = {
  "title" : "Weebostore"
}


export async function getData() {
  try {
    const res = await fetch('http://127.0.0.1:8000/api/products/', {
    next: {
        revalidate: 86400, // Re-request to server every 1 day
      }
    })
    const data = await res.json()
    console.log(data)
  
    return data
  } catch {
    return []
  }
}



export default async function Page() {
  const data = await getData()

  const newData = data.map((field) => {
    field.product_image = imageUrlResolver(field.product_image)

    return field
  })



  return <Home data={newData} />
}
