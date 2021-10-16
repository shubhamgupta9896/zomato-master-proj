import mongoose from "mongoose";

const connect =  async () => {
  return mongoose.connect(process.env.MONGO_URL, {
  
  });
};
export default connect;