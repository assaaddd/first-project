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
        default: "https://play-lh.googleusercontent.com/UkusYnx9NMBTfPsjU2Qu9GkJXVjz3CqxnKeUNlwQf6FNgZy-V_nrK9GEP_JbhIpP15BU=w526-h296-rw",
    }
},
{
    timestamps:true,
}
)

const User = mongoose.model("User" , userSchema);

export default User;