
import * as React from 'react'
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom';

const { lazy } = React
const Index = lazy(() => import(/* webpackChunkName: "index" */ '@pages/index'))
const Login = lazy(() => import(/* webpackChunkName: "login" */ '@pages/login'))
const About = lazy(() => import(/* webpackChunkName: "about" */ '@pages/about'))

interface IcrmProps extends RouteProps {
    auth?: Boolean
}

const routers:IcrmProps[] = [
    {
        component: Index,
        path:'/',
        exact: true,
        auth: true
    },
    {
        component: About,
        path:'/about',
        exact: true,
        auth: true
    },
    {
        component: Login,
        path:'/login',
        exact: true
    },
]

export default (token) => (
    <Switch>
        {
            routers.map((route, index) => {
                let { component, path, exact } = route;
                const LazyCompon: any = component;
                return <Route 
                    key={index} 
                    exact={exact} 
                    path={path} 
                    render={props => {
                        if(token && route.path === '/login'){
                            return <Redirect to='/' />
                        }else if( !route.auth || token || route.path === '/login'){
                            return <LazyCompon {...props} />
                        }
                        return <Redirect to={{ pathname: '/login', state: { pathname: props.location.pathname } }} />
                    }} 
                />
            })
        }
    </Switch>
)

