const mongoose=require('mongoose');
const mongoUrl="mongodb+srv://irfanabbas7757:6YP4i3ROAhdRydIb@cluster0.urpmv.mongodb.net/godelicious?retryWrites=true&w=majority&appName=Cluster0";
// const mongoDB= async()=>{
//  await mongoose.connect(mongoUrl,(err,result)=>{
//     if(err) console.log("yes error",err);
//     console.log("connected")
// });
// }
// module.exports=mongoDB;/

// main()
//  .then(()=>{
//     console.log("connected to DB");
    
//  })
//  .catch((err) =>{
//     console.log(err);
//  });
   
// async function main(){
//     await mongoose.connect(mongoUrl);
    
// }

const mongoDB = async () => {
   try {
      await mongoose.connect(mongoUrl);
      console.log("connected");
      const fetch_data=await mongoose.connection.db.collection("food_items");
      global.food_items = await fetch_data.find({}).toArray();

      const foodCategory=await mongoose.connection.db.collection("food_category");
      global.foodCategory = await foodCategory.find({}).toArray();

      // global.food_items=data;
      // global.foodCategory=catData;

   } catch (err) {
      console.log("----", err);
   }
};

// Call the function to connect to MongoDB
mongoDB();


