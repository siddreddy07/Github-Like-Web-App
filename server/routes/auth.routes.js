import express from "express"
import passport from "passport";

const router = express.Router()

router.get("/github",passport.authenticate('github', { scope: [ 'user:email' ] }))

router.get("/github/callback",passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL + '/login' }),
function(req, res) {
  res.redirect(process.env.CLIENT_BASE_URL);
})


router.get("/check",(req,res)=>{
    if(req.isAuthenticated()){
        console.log(req.user)
        res.json({user:req.user})
    }
    else{
        res.json({user:null})
    }
})

router.get('/logout', function(req, res){
    req.session.destroy((err)=>{
        res.json({message:"Logged Out"})
    })
  });

export default router