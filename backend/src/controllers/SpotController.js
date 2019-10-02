import Spot from '../models/Spot'

export default {
    async store(req , res) {
        const {filename} = req.file;
        const {company , techs , price} = req.body;
        const {user_id} = req.headers;

        const spot = await Spot.create({
            user : user_id,
            thumbnail : filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    }
}