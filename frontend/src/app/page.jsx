import Card from "@/components/Atoms/Card"
// import BottomBar from "@/components/BottomBar"
import HorizontalGroup from "@/components/Molecules/HorizontalGroup"
import Navbar from "@/components/Navbar"
import Footer from "../components/Footer"


export default function Home() {
  return (
    <main>
      <div className="px-12">
        <Navbar />

        <div className="pt-1 pb-12">

          {/* slider */}
          <div className="w-full rounded-lg bg-red-500 h-[200px] mt-8 mb-12">
            <img src="" alt="banner" className="w-full" />
          </div>


          <HorizontalGroup label="Sword Art Online ">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

            <Card />
            <Card />

            <Card />
            <Card />
            <Card />
          </HorizontalGroup>

          {/* <BottomBar /> */}
        </div>

      </div>
        <Footer />
    </main>
  )
}
