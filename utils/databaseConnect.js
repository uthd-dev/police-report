import mongoose from 'mongoose';

export default async () => {
  if (!global.mongoose) {
    global.mongoose = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      bufferCommands: false,
      bufferMaxEntries: 0,
      useUnifiedTopology: true,
    });
    return global.mongoose;
  } else if (global.mongoose) return;
};
