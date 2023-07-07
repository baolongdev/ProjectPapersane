import {
    Hoaphuongdo,
    Landing,
    Lehoiamnhac,
    Letrianvatruongthanh,
    Notfound,
    BookflixLanding,
    BaiVietGocNhinMoi,
    GocNhinMoi,
    TimSach,
    LoginRegister,
    Clbinfo,
    Doantruong,
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/doantruong", compnent: Doantruong },
    { path: "/clbinfo/:id", compnent: Clbinfo },
    { path: "/bookflix", compnent: BookflixLanding },
    { path: "/bookflix/gocnhinmoi", compnent: GocNhinMoi },
    { path: "/bookflix/timsach", compnent: TimSach },
    { path: "/hpd", compnent: Hoaphuongdo },
    { path: "/lhan", compnent: Lehoiamnhac },
    { path: "/lta&th", compnent: Letrianvatruongthanh },
    { path: "/login&register", compnent: LoginRegister },
    { path: "*", compnent: Notfound },
    { path: "/bookflix/baiviet", compnent: BaiVietGocNhinMoi },
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }