import * as React from 'react'
import { StaticRouter } from 'react-router-dom';
import router from './routers/server'
import { MyContext  } from './store'
function createServerDom(url, store){
    return (
        <StaticRouter location={url}>
            <MyContext.Provider value={store}>
                {router()}
            </MyContext.Provider>
        </StaticRouter>
    );
}

export default createServerDom