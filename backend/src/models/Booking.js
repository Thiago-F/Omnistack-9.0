import mongoose , {Schema} from 'mongoose';

const BookingSchema = new Schema({
    date: String,
    approved : Boolean,
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    spot : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Spot'
    }
});

export default mongoose.model('Booking' , BookingSchema);