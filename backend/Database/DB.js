import mongoose from "mongoose"



const Connection = async () => {
    try {
        await mongoose.connect("mongodb+srv://shaf:shafiq@cluster0.rbvea9m.mongodb.net/test")
        console.log("DB CONNECTED")
    }
    catch(error) {
        console.log(error)
    }
}

export default Connection;