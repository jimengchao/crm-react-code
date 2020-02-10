import * as Koa from 'koa'

import * as render from 'koa-swig'
import * as serve from 'koa-static'
import co from 'co'
// import { configure, getLogger } from 'log4js'
import { resolve, join } from 'path'
// import { historyApiFallback } from 'koa2-connect-history-api-fallback'
import { createContainer, Lifetime } from'awilix'
import {loadControllers, scopePerRequest } from 'awilix-koa'

//创建服务实例
const app = new Koa();

  //配置swig(前端模板)
app.context.render = co.wrap(render({
    root: join(__dirname, './views'),
    autoescape: false,
    cache: 'memory',
    ext: 'html',
    // varControls: ["[[","]]"],//默认动态数据是{{}}，但是为了与vue区分开来，改为[[xxx]]
    writeBody: false
}))

app.use(serve(resolve(__dirname, './dist')))

// 创建IOC的容器
const container = createContainer()

// 装载所有的service(models), 并将services代码注入到controllers
container.loadModules([
    resolve(__dirname, './services/*.ts'),
], {
    // we want `TodosService` to be registered as `todosService`.
    formatName: 'camelCase',
    resolverOptions: {
        lifetime: Lifetime.SCOPED
    }
})

// 每一次请求都是一个new model
app.use(scopePerRequest(container))

app.use(loadControllers(resolve(__dirname, './controllers/*.ts'), {cwd: __dirname}))

app.listen(1027, () => {
  console.log(`~~~~~~~~~~~~~~~~~~~~~~~`)
})
