import mongoose from 'mongoose';


const AdminAttendaceLogsSchema = new mongoose.Schema({
    admin_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Admin",
        required: true 
    },
    role:{
        type:String,

    },
    check_in_allowed_start: { type: String, default: "17:30" }, // 5:30 PM
    check_in_allowed_end: { type: String, default: "19:00" },   // 7:00 PM
    
    check_out_allowed_start: { type: String, default: "20:00" }, // 8:00 PM
    check_out_allowed_end: { type: String, default: "21:00" },   // 9:00 PM
    
    // Current Active QR State
    current_qr_status:{
        type:String,
        enum:["check_in_active", "check_out_active", "inactive"],
        default:"inactive"
    },
    actual_check_in_qr_time: { type: Date },
    actual_check_out_qr_time: { type: Date }

},{
    timestamps:true
})

