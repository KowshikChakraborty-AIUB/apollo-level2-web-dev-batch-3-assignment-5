import FeaturedRooms from "@/components/featuredRooms/FeaturedRooms"
import Hero from "@/components/hero/Hero"
import ServiceAdvertisement from "@/components/serviceAdvertisement/ServiceAdvertisement"

const home = () => {
  return (
    <div>
      <Hero/>
      <ServiceAdvertisement/>
      <FeaturedRooms/>
    </div>
  )
}

export default home
