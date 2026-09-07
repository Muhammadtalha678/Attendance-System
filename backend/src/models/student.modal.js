import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please add a name"],
        trim:true
    },
    
    student_cnic:{
        type:String,
        required:[true,"Please add a cnic"],
        unique:true,
        trim:true
    },

    // student_id:{
    //     type:Number,
    //     required:[true,"Please add a student id"],
    //     unique:true
    // },
    admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required:true
    },
    is_verified:{
        type: Boolean,
        default:false
    },
    register_link_generated_time:{
        type:Date
    }

    
},
{
    timestamps:true,
    toJSON:{
        transform:function (doc,ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
            return ret
        }
    }
}
)

const StudentModal = mongoose.model("Student",StudentSchema)

export default StudentModal