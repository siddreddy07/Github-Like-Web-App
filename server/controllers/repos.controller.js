export const explorerepos = async (req,res)=>{

    const{language} = req.params

    try {

        const resposne = await fetch(`https://api.github.com/search/repositories?q=language:${language}&sort=forks&order=desc&per_page=10`,{
            headers:{
                authorization: `token ${process.env.GITHUB_API_KEY}`
            },
        })

        const data = await resposne.json()
        
        res.status(200).json({repos:data.items})

    } catch (error) {
        res.status(500).json({error:error.message});
    }

}