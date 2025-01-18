import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <Link to={'/'} className="flex justify-center">
            <img src='/src/assets/404.JPG' alt="" />
          </Link>
          <div className="flex justify-center my-5 gap-7">
            <Link to={'/'}>
              <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500">Got to Home</Button>
            </Link>
            <Button className="text-center bg-yellow-400 text-black hover:bg-yellow-500">Got to Login</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorPage
