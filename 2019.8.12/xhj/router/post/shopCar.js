const Router=require('koa-router');

const {upshopMsg5,findShopTorf}=require('../../controller/db');
const router=new Router();
router.post('/v1/api/shopCar',async(ctx,next)=>{
    const {name,id,pic1,money1,size}=ctx.request.body;
    let result=await upshopMsg5({
        id,
        name,
        pic1,
        money1,
        size
    } );
    ctx.body=result
});
//查购物车是否有相同产品信息
router.post('/v1/api/shopCarAll',async(ctx,next)=>{
    const {name,id,pic1,money1,size}=ctx.request.body;
    let result=await findShopTorf({
        shopid:id,
        title:name,
        shopPic:pic1,
        money:money1,
        subTitle:size
    } );
    console.log(result,5858)
    ctx.body=result
});
module.exports=router;