import * as React from "react";
import { MyContext } from '../../store'
import './index.scss'

function Login(props){
    
    const store = React.useContext(MyContext);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const submit = () => {

        if( !username.trim() || !password.trim() ) return ;

        // store.setToken(username)
        // store.setUserInfo({
        //     username,
        //     password
        // })

    }

    return (
        <div className="login-page">
            <div className="login-title">登录系统</div>
            <div className="login-main">
                <input className="ui-input mb30 block" placeholder="用户名" onChange={(e) => {setUsername(e.target.value)}}/>
                <input type="password" className="ui-input mb30 block" placeholder="密码" onChange={(e) => {setPassword(e.target.value)}}/>
                <button onClick={submit} className="ui-button ui-button-primary block" role="button">登录</button>
            </div>
        </div>
    )
}


export default Login;