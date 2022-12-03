import { Navigate } from "react-router-dom"
import Movies from "../components/Movies"
import MovieDetails from "../components/MovieDetails"
const routes = [
    { path: '/movie/:page', element:< Movies/>},
    { path: '/movieditail/:id', element:< MovieDetails/>},
    { path: '/*' , element: < Navigate to='/movie/page=1'/>}
 ]
export default routes