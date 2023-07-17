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
    Activityhot,
    BookInfo,
} from "../pages"


const publicRoutes = [
    { path: "/", compnent: Landing },
    { path: "/doantruong", compnent: Doantruong },
    { path: "/doantruong/bch2223", compnent: Bch },
    { path: "/clbinfo/:id", compnent: Clbinfo },
    { path: "/hots/:id", compnent: Activityhot },
    { path: "/bookflix", compnent: BookflixLanding },
    { path: "/bookflix/gocnhinmoi", compnent: GocNhinMoi },
    { path: "/bookflix/timsach/:searchQueryInURL?", compnent: TimSach },
    { path: "/bookflix/baiviet/:articleId", compnent: BaiVietGocNhinMoi },
    { path: "/login&register", compnent: LoginRegister },
    { path: "/bookflix/bookinfo/:bookId", compnent: BookInfo },
    { path: "*", compnent: Notfound },
]

const privateRoutes = [
    {}
]

export { publicRoutes, privateRoutes }