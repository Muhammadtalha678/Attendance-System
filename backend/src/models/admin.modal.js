import mongoose from 'mongoose';

const AdminSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Please add a email"],
        unique:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please Add a valid email"],
    },
    password:{
        type:String,
        required:[true,"Please add a password"],
        minlength:8
    },
    role:{
        type:String,
        required:[true,"Please add a role"],
        enum:["admin","coadmin"]
    }
},{
    timestamps:true,
    toJSON:{
        transform:function (doc,ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
            delete ret.password
            return ret
        }
    }
})

const AdminModal = mongoose.model("Admin",AdminSchema)

export default AdminModal