import mongoose , {Schema} from 'mongoose';

const UserSchema = new Schema({
    thumbnail : String,
    company : String,
    price : Number,
    techs : [String],
    user : {//abstração de relacionamento entre models no mongo
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User'
    }
});

export default mongoose.model('Spot' , UserSchema);