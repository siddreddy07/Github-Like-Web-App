import mongoose from "mongoose";

const userschema = new mongoose.Schema({

username :{
    type:String,
    required:true,
    unique:true
},

fullname:{
    type:String,
    default:""
},


profileurl:{
    type:String,
    required:true
},

avatarurl:{
    type:String
},

likedprofiles :{
    type:[String],
    default:[]
},


likedby:{
    type:[{
        username:{
            type:String,
            required:true
        },

        avatarurl:{
            type:String
        },
        likeddate:{
            type:Date,
            default:Date.now
        }
    }]
}


},{timestamps:true})



const User = mongoose.model("User",userschema)
export default User;