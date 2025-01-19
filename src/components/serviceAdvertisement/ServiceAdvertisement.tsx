import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const ServiceAdvertisement = () => {
  return (
    <div>
      <div>
        <div className="text-4xl font-bold text-center py-3">
          <div className="animate-slide-from-top">
            <p className="mb-2">Services We Provide</p>
            <div className="flex justify-center">
              <div className="w-3/12 text-center rounded-md h-[5px] bg-purple-400"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-2 my-6 animate-slide-bounce">
          <Card>
            <CardHeader>
              <div>
                <img className="h-16 rounded mx-auto mb-5" src="https://i.ibb.co.com/mFDt3Md/real-time-avail.jpg" alt="" />
                <CardTitle className="text-center">Real-Time Availability</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-justify">Our meeting room booking system provides real-time availability, ensuring that you can instantly see which rooms are free or occupied. With up-to-the-minute updates, you can avoid double bookings and make confident decisions when selecting the perfect space for your needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div>
                <img className="h-16 rounded mx-auto mb-5" src="https://i.ibb.co.com/m8gz5Cb/booking-confirm-tick-purple.jpg" alt="" />
                <CardTitle className="text-center">Instant Booking Confirmation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-justify">Once you’ve selected your preferred meeting room, your booking is confirmed instantly. This streamlined process eliminates delays and provides immediate peace of mind, so you can focus on preparing for your meeting without any uncertainties.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div>
                <img className="h-16 rounded mx-auto mb-5" src="https://i.ibb.co.com/4J2SXdx/flexible-scheduling-purple.png" alt="" />
                <CardTitle className="text-center">Flexible Scheduling</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-justify">Our system offers flexible scheduling options, allowing you to easily adjust meeting times as your plans evolve. Whether you need to extend your session or change the room, the platform lets you manage all aspects of your booking with minimal effort.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <div>
                <img className="h-16 rounded mx-auto mb-5" src="https://i.ibb.co.com/18YgSYP/24-7-support-purple.jpg" alt="" />
                <CardTitle className="text-center">24/7 Support</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-justify">Our dedicated support team is available 24/7 to assist you with any questions or issues you might encounter. Whether it's booking a room or resolving technical concerns, our experts are just a click away, ensuring a smooth and hassle-free experience at any time of day or night.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default ServiceAdvertisement
