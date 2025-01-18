import App from "@/App";
import ErrorPage from "@/pages/errorPage/errorPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([{
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage/>,
    children: [
        {
            
        }
    ]
}])

export default router;