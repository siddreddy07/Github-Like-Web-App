import User from '../models/user.model.js'



export const GetuserProfileAndRepos = async(req,res)=>{

    const {username} = req.params

    try {
        
            
    const userRes = await fetch(`https://api.github.com/users/${username}`,{
        headers: {
            authorization: `token ${process.env.GITHUB_API_KEY}`
        }
      })
      const userProfile = await userRes.json();

      
      const repoRes = await fetch(userProfile.repos_url,{
        headers: {
            authorization: `token ${process.env.GITHUB_API_KEY}`
        } 
      })
      const repos = await repoRes.json();

      res.status(200).json({userProfile,repos})

    } catch (error) {
        res.status(500).json({error:error.message})
    }


}



export const likedprofile = async(req,res)=>{

    try {
    
        const { username } = req.params;
        console.log(req)
        const user = await User.findById(req.user._id.toString()) //authenticated user

        const usertoLike = await User.findOne({username}) //

        if(!usertoLike){
            res.status(404).json({error:"User not a Member"})
        }

        if(user.likedprofiles.includes(usertoLike.username)){
            res.status(400).json({error:"User already liked"})
        }

        usertoLike.likedby.push({username:user.username,avatarurl:user.avatarurl,likeddate:Date.now()})
        user.likedprofiles.push(usertoLike.username)

        await Promise.all([usertoLike.save(),user.save()])

        res.json({message:"User liked Successfully"})

    } catch (error) {
        
    }

}



export const getLikes = async(req,res)=>{


    try {
        
        const user = await user.findById(req.user._id.toString());
        res.status(200).json({likedby:user.likedby})

    } catch (error) {
        res.status(400).json({error:error.message})
    }

}