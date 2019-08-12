const Koa=require('koa');

const app=new Koa()

const Router=require('koa-router');

const bodyparser=require('koa-bodyparser');

const views=require('koa-views');

const koaStatic=require('koa-static');

const path=require('path');

const requireD=require('require-directory');

const config=require('./config')
//读静态文件
app.use(koaStatic(path.join(__dirname,'./public')));

//取消后缀
app.use(views(path.join(__dirname,'./public/html'),{
    extension:'ejs'
}))
//解析post
app.use(bodyparser())

//挂载路由
requireD(module,'router',{visit:function(moduleR){
    // console.log(moduleR)
        if(moduleR instanceof Router){
            app.use(moduleR.routes());
        }
    }
})
app.listen(config.port,()=>{
    console.log(config.port)
})