import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <Link to={'/'} className="flex justify-center">
            <img src='https://i.ibb.co.com/vV5dSsd/404.jpg' alt="" />
          </Link>
          <div className="my-10 text-center">
            <Link to={'/'}>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-500 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Go to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
