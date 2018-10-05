const path = require('path');
const Koa = require('koa');
const static = require('koa-static');

const app = new Koa();
app.use(static(path.join(__dirname, 'public')));

app.listen(4000, () => {
    console.log('\n服务启动\n');
    console.log('\n127.0.0.1:4000\n');
})