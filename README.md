

### 开发
```

# development环境
yarn client:dev
yarn server:start 

# production环境
yarn client:prod
yarn server:build 

```

### webpack 
1. webpack.config.js  基本配置 开发/生产环境都需要的
2. webpack.development.js 开发环境配置所需
3. webpack.production.js 生产环境配置所需

### yarn pnp

1. 生成 package.json 文件
2. 在 package.json 添加 
```
{
    "installConfig": {
        "pnp": true
    }
}
```

### 注意事项

1. 如果安装 @types/react，  `import React from 'react'` 需要改成 `import * as React from 'react'`. 因为 @types/react 是  `export {}` 导出
2. .balbelrc 配合 babel-loader 所使用的。
3. css-loader 的 如果设置了 importLoaders 则开启一个 处理 @import 'xx.css' 
4. loader 是从下往上 依次执行 
5. 使用ts中 webpack alias 别名 需要配合 tsconfig 中 paths 的使用,
6. 打包动态导入组件 需要用 `babel-lodaer` 和 `@babel/plugin-syntax-dynamic-import` 来解析