
import Main from "@/components/Main"
import Second from "@/components/Second"
import Third from "@/components/Third"
import Leading from "@/components/Leading"
import Download from "@/components/Download"
import Aboutus from "@/components/Aboutus"
import Checkout from "@/components/Checkout"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div>
      <title>Landing Pages 1</title>
      <meta name="descriptions" content="NextJs Port"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap" rel="stylesheet" />
      <link rel="" href=''/>
      <Main />
      <Second />
      <Third />
      <Leading />
      <Download />
      <Aboutus />
      <Checkout />
      <Footer />
    </div>
  )
}
