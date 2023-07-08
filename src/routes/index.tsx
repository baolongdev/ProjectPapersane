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
    Activityhot,
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/doantruong", compnent: Doantruong },
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