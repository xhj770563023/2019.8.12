const Router=require('koa-router');

const {upshopMsg1}=require('../../controller/db');
const router=new Router();
router.post('/v1/api/isChangenum1',async(ctx,next)=>{
    const {isChange,id}=ctx.request.body;
    let result=await upshopMsg1({
        isChange,
        id,
    } );
    ctx.body='0'
});
module.exports=router;