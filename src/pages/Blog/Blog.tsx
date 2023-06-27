import React from 'react'
import Pagination from '@mui/material/Pagination';
import { Header } from './components'
import './Blog.css'


import './Blog.css'
function Blog() {
    return <div className='Blog'>
        <Header />
        <main className="main">
            <div className='blog__container container '>
                <div className='blog__card grid'>
                    <div className='blog__card-img'>
                        <img src="/product1.png" alt="" />
                    </div>
                    <div className='blog__card-data'>

                        <h2 className='blog__card-title'>
                            asdv
                        </h2>
                        <h3 className='blog__card-subtitle'>
                            asdfasf
                        </h3>
                        <p className='blog__card-date'>
                            12/04/2006
                        </p>
                    </div>
                </div>
                <div className='blog__card grid'>
                    <div className='blog__card-img'>
                        <img src="/product1.png" alt="" />
                    </div>
                    <div className='blog__card-data'>

                        <h2 className='blog__card-title'>
                            asdv
                        </h2>
                        <h3 className='blog__card-subtitle'>
                            asdfasf
                        </h3>
                        <p className='blog__card-date'>
                            12/04/2006
                        </p>
                    </div>
                </div>
            </div>
            <div className='paging '>
                <Pagination count={10} />
            </div>
        </main>
    </div>
}

export default Blog