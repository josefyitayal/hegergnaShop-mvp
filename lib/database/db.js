import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL;

if (!MONGODB_URL) {
  throw new Error("mongodb url is not present");
}

let cached = global.mongoose;

if (!cached) {
  cached = mongoose.global = { conn: null, promise: null };
}

export default async function dbConnect() {
    if(cached.conn) return cached.conn;

    if(!MONGODB_URL) throw new Error('Missing MONGODB_URL');
  
    cached.promise = 
      cached.promise || 
      mongoose.connect(MONGODB_URL, { 
        dbName: 'hegergna-mvp-db', bufferCommands: false, serverSelectionTimeoutMS: 10000, socketTimeoutMS: 45000
      })
  
    cached.conn = await cached.promise;
  
    return cached.conn;
}
