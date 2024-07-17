import mongoose from "mongoose";  

export const connectDB = async () => {
    await mongoose.connect ('mongodb+srv://thakurmuskan493:778180@cluster0.lf5gisc.mongodb.net/food-delivery').then(()=>console.log("DB connected"));
}