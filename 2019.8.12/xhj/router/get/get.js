const Router=require('koa-router');
const {findShop,findbike,shopdesc,findAll}=require('../../controller/db')
const router=new Router();

router.get('/index_shop',async(ctx,next)=>{
    let result=await findShop();
    let result1=await findAll();
    await ctx.render('index_shop',{
        data:result,
        data1:result1[0].cla,
    });
 });
 router.get('/shopdesc',async(ctx,next)=>{
     //请求首页数据
     let result=await shopdesc({
         id:ctx.query.id
     })
    await ctx.render('shopdesc',{
        data:result[0]
    });
 });
 router.get('/',async(ctx,next)=>{
    let result=await findbike()
    await ctx.render('index',{
        data:result
    });
 });
module.exports=router;