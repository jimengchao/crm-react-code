import  * as React from "react";
import IndexBanner from '@components/Index'
import Layout from '@pages/layout'
import { MyContext } from '@store/index'
import './index.scss'


const { useContext } = React;

function Index(){

   const store = useContext(MyContext);
    return (
        <>
            <Layout>
                <div className="index-pages">
                    <IndexBanner />
                    <hr />
                    {/* username: {userInfo.username} <br />
                    password: {userInfo.password} */}
                    <hr />
                    <section>
                        IndexPage
                        {/* {store.token} */}
                    </section>
                </div>
            </Layout>
        </>
    )

}


export default Index;