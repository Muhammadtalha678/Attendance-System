import mongoose from 'mongoose';

const StudentAttedanceLogsSchema = new mongoose.Schema({
    student_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    check_in:{type:Date},
    check_out:{type:Date},
    status:{
        type:String,
        enum:["present","absent"]
    }
},{
    timestamps:true,
    toJSON:{
        transform:function (doc,ret) {
            ret.id = ret._id
            delete ret._id
            delete ret.__v
            return ret
        }
    }
})


const StudentAttedanceLogsModal = mongoose.model("AttedanceLog",StudentAttedanceLogsSchema)

export default StudentAttedanceLogsModal