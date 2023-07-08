import {
    Landing,
    Notfound,
    Bookflix,
    Blog,
    LoginRegister,
    Clbinfo,
    Doantruong,
    Bch,
    Activityhot
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/doantruong", compnent: Doantruong },
    { path: "/doantruong/bch2223", compnent: Bch },
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