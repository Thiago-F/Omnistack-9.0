import Booking from '../models/Booking'
import Spot from '../models/Spot'

class BookingController{
    async store(req , res){
        const {user_id} = req.headers;
        const {spot_id} = req.params;
        const {date} = req.body;

        const spotExists = await Spot.findById(spot_id)
        if(!spotExists){
            return res.status(404).json({error : 'Spot not found'})   
        }

        const bookingExist = await Booking.findOne({user : user_id , date})
        if(bookingExist){
            return res.status(403).json({error : 'You alreary booking in this spot'})
        }

        const booking = await Booking.create({
            user : user_id,
            spot: spot_id,
            date
        })

        await booking.populate('spot').populate('user').execPopulate();

        return res.json(booking);
    }
}


export default new BookingController();