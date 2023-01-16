
import Movies from "../components/Movies"
import MovieDetails from "../components/MovieDetails"
const routes = [
    { path: '/', element:< Movies/>},
    { path: '/movie/:page', element:< Movies/>},
    { path: '/movieditail/:id', element:< MovieDetails/>},
  ]
export default routes