import Event from "@/app/(mainsite)/components/homepage/Event/Event";
import Find from "@/app/(mainsite)/components/homepage/Find/Find";
import Header from "@/app/(mainsite)/components/homepage/Header/Header";
import ServiceArea from "@/app/(mainsite)/components/homepage/ServiceArea/ServiceArea";
import Taste from "@/app/(mainsite)/components/homepage/Taste/Taste";


export default function Home() {
  return (
    <>
      <Header />
      <Taste />
      <ServiceArea />
      <Find />
      <Event />
    </>
  )
}
