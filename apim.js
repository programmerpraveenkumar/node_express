
const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://programmerpraveenkumar:DP6m789KUytbh523@cluster0.twdnbua.mongodb.net';
///mongodb+srv://programmerpraveenkumar:<password>@cluster0.twdnbua.mongodb.net/
const client = new MongoClient(url);

// Database Name
const dbName = 'sample_mflix';
 
 t=async()=>{
    try{
      // Use connect method to connect to the server
      await client.connect();
      const db = client.db(dbName);
      const collection = await db.collection('comments').find({}).toArray();     
    console.log(collection);
    }catch(e){
       console.log({"error":e});
    }

}
t();

//DP6m789KUytbh523
//mongodb://atlas-sql-6676c3f3aac0601b8ef710b3-crprf.a.query.mongodb.net/sample_mflix?ssl=true&authSource=admin