import MobileImage from "./Mobile-Image"
import DesktopImage from "./Desktop-Image"
import { Text } from "./Text"

export default function App() {
  return (
    <section className="flex items-center justify-center h-screen">
      <div className="body bg-white h-[60%] w-[90%] rounded-[1.5rem] md:w-[60%] md:flex">
        <MobileImage />
        <DesktopImage />
        <Text />
      </div>
    </section>
  )
}