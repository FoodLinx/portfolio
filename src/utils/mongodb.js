import mongoose from 'mongoose';

export const connectMongoDB = async () => {
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise()
    }
    const uri = process.env.MONGO_URI
    if (!uri) throw new Error('MONGO URI does not exist in environment')
    const options = {
      useNewUrlParser: true,
    }
    return await mongoose.connect(process.env.MONGO_URI, options)
}