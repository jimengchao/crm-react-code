cross-env NODE_ENV=development ts-node-dev --respawn --transpileOnly ./src/server/app.ts

# supervisor ./dist/app.js
# node中有个nodemon，可以在开发时自动的重启我们的node程序，而在ts-node中，对应的就是ts-node-dev
# --respawn 在退出脚本之后，请继续观察更改