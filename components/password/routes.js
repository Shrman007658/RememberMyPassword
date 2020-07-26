const router=require('express').Router();
const controller=require('./controller');

router.get('/passwords',controller.getpasswords);
router.post('/passwords',controller.addpassword);
router.put('/passwords/:id',controller.updatepassword);
router.delete('/passwords/:id',controller.deletepassword);


module.exports=router;