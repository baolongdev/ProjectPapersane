import {
    Hoaphuongdo,
    Landing,
    Lehoiamnhac,
    Letrianvatruongthanh,
    Notfound,
    Bookflix,
    Blog,
    LoginRegister,
    Clbinfo,
    Doantruong
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/doantruong", compnent: Doantruong },
    { path: "/clbinfo/:id", compnent: Clbinfo },
    { path: "/bookflix/books", compnent: Bookflix },
    { path: "/bookflix/blog", compnent: Blog },
    { path: "/hpd", compnent: Hoaphuongdo },
    { path: "/lhan", compnent: Lehoiamnhac },
    { path: "/lta&th", compnent: Letrianvatruongthanh },
    { path: "/login&register", compnent: LoginRegister },
    { path: "*", compnent: Notfound }
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }