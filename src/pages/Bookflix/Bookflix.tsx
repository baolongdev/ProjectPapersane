import React, { Fragment } from 'react'
import { Header, Products } from './components'
import './Bookflix.css'
function Bookflix() {
    return <div className='Bookflix'>
        <Header />
        <main className="main">
            <Products />
        </main>

    </div>
}

export default Bookflix