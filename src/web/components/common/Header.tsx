import * as React from 'react'
import { Link } from 'react-router-dom'

import './common.scss'
function Header(){

    return (
        <div className="header-box">
            <Link to="/">首页</Link>
            &nbsp;
            <Link to="/about">关于我</Link>
            &nbsp;
            <span>退出</span>
        </div>
    )
}

export default React.memo(Header)