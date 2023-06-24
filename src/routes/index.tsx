import {
    Hoaphuongdo,
    Landing,
    Lehoiamnhac,
    Letrianvatruongthanh,
    Notfound,
    Bookflix,
    News
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/bookflix", compnent: Bookflix },
    { path: "/hpd", compnent: Hoaphuongdo },
    { path: "/lhan", compnent: Lehoiamnhac },
    { path: "/lta&th", compnent: Letrianvatruongthanh },
    { path: "/news", compnent: News },
    { path: "*", compnent: Notfound }
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }