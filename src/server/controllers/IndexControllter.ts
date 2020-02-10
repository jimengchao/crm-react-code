import { route, GET } from 'awilix-koa'
import { renderToString } from 'react-dom/server'
import createServerDom from '../dist/main'

@route('/*')
export default class IndexController {

    @route('/')
    @GET()
    async index(ctx){
        const path = ctx.request.url;
        const dom = renderToString(createServerDom(path, {token: 2}))
        ctx.body = await ctx.render('index', { content: dom });
    }

}