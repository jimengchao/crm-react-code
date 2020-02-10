
import * as React from 'react'
import { Switch, Route, RouteProps, Redirect } from 'react-router-dom';

import Index from '@pages/index'
import Login from '@pages/login'
import About from '@pages/about'

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

export default () => (
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
                        return <LazyCompon {...props} />
                    }} 
                />
            })
        }
    </Switch>
)

