import {
    Landing,
    Notfound,
    BookflixLanding,
    BaiVietGocNhinMoi,
    GocNhinMoi,
    TimSach,
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
    { path: "/bookflix", compnent: BookflixLanding },
    { path: "/bookflix/gocnhinmoi", compnent: GocNhinMoi },
    { path: "/bookflix/timsach", compnent: TimSach },
    { path: "/login&register", compnent: LoginRegister },
    { path: "*", compnent: Notfound },
    { path: "/bookflix/baiviet", compnent: BaiVietGocNhinMoi },
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }