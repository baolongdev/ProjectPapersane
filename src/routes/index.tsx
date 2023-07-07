import {
    Landing,
    Notfound,
    Bookflix,
    Blog,
    LoginRegister,
    Clbinfo,
    Doantruong,
    Activityhot
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/doantruong", compnent: Doantruong },
    { path: "/clbinfo/:id", compnent: Clbinfo },
    { path: "/hots/:id", compnent: Activityhot },
    { path: "/bookflix/books", compnent: Bookflix },
    { path: "/bookflix/blog", compnent: Blog },
    { path: "/login&register", compnent: LoginRegister },
    { path: "*", compnent: Notfound }
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }