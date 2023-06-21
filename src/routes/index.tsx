import Landing from "../pages/Landing/Landing"
import Libary from "../pages/Libary/Libary"
const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/bookflix", compnent: Libary },
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }