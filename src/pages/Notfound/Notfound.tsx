import React from 'react'
import './Notfound.css'
function Notfound() {
    return <section className="page_404">
        <div className="container">
            <div className="row">
                <div className="col-sm-12 ">
                    <div className="col-sm-10 col-sm-offset-1  text-center">
                        <h1 className="text-center ">Not Found</h1>
                        <div className="four_zero_four_bg">
                        </div>

                        <div className="contant_box_404">
                            <h3 className="h2">
                                Có vẻ như bạn đang bị lạc
                            </h3>

                            <p>trang bạn đang tìm kiếm không có sẵn!</p>

                            <div onClick={() => {
                                window.history.back();
                            }} className="link_404 button">Trở về</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Notfound