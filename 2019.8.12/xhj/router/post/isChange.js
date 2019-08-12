const Router=require('koa-router');

const {upshopMsg,delshoplist,upshopMsg3,findAll1}=require('../../controller/db');
const router=new Router();

router.post('/v1/api/isChange',async(ctx,next)=>{
    const {isChange,id}=ctx.request.body;
    let result=await upshopMsg({
        isChange,
        id,
    } );
    ctx.body='0'
});
router.post('/v1/api/isChange2',async(ctx,next)=>{
    const {isChange,id}=ctx.request.body;
    let result=await delshoplist({
        id,
    } );
    ctx.body=result
});
router.post('/v1/api/isChange3',async(ctx,next)=>{
    const {isChange}=ctx.request.body;
    let result=await upshopMsg3({
        isChange,
    } );
    ctx.body=result
});
router.post('/v1/api/isChangeAll',async(ctx,next)=>{
    const {isChange}=ctx.request.body;
    let result=await findAll1({
        isChange,
    } );
    ctx.body=result
});
module.exports=router;