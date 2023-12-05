import Details from "./content"


export const metadata = {
    "title": "Weebostore - Product"
}

export default function Page({params, searchParams}) {
    console.log(searchParams)

    return <Details />
    
}