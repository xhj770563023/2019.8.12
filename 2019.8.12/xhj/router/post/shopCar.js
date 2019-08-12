const Router=require('koa-router');

const {upshopMsg5}=require('../../controller/db');
const router=new Router();
router.post('/v1/api/shopCar',async(ctx,next)=>{
    const {name,id,pic1,money1,size}=ctx.request.body;
    console.log(name,id,pic1,money1,111111)
    let result=await upshopMsg5({
        name,
        pic1,
        money1,
        size
    } );
    ctx.body=result
});
module.exports=router;