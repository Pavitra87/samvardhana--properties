const mongoose =require('mongoose')

const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.MONGODB_URL) 
       console.log("Mongodb is connected successfully...!")
    } catch (error) {
        console.log('mongodb connection failde',error)
        process.exit(1)
    }
}

module.exports={connectDB}
    