
import Movies from "../components/Movies"
import MovieDetails from "../components/MovieDetails"
import UIUploader from "../components/UIUploader"
 const routes = [
    { path: '/', element:< Movies/>},
    { path: '/movie/:page', element:< Movies/>},
    { path: '/movieditail/:id', element:< MovieDetails/>},
    { path: '/ui', element:< UIUploader/>},
  ]
export default routes