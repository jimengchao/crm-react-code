import * as React from 'react'
import Header from '@components/common/Header'

const Layout = (props) => {
    console.log(props);
    return (
        <div>
            <Header />
            {props.children}
        </div>
    )
}

export default Layout
