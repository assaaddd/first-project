import mongoose from 'mongoose';

const schema = mongoose.Schema;

const userSchema = new schema({
    username:{
        type:String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required: true,
        unique: true
    },
    password:{
        type:String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fprofile-image&psig=AOvVaw0Lu2oJjve1-OKSqGkCYm88&ust=1735974905538000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOClqtGA2YoDFQAAAAAdAAAAABAE",
    }
},
{
    timestamps:true,
}
)

const User = mongoose.model("User" , userSchema);

export default User;