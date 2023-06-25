import {
    Hoaphuongdo,
    Landing,
    Lehoiamnhac,
    Letrianvatruongthanh,
    Notfound,
    Bookflix,
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/bookflix/books", compnent: Bookflix },
    { path: "/hpd", compnent: Hoaphuongdo },
    { path: "/lhan", compnent: Lehoiamnhac },
    { path: "/lta&th", compnent: Letrianvatruongthanh },
    { path: "*", compnent: Notfound }
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }