const {MongoClient} = require('mongodb')



const uri = "mongodb+srv://leonmher:<password>@cluster0.kc6el.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"



const client = new MongoClient(uri)

async function main (){

    try{
    
        await client.connect();

        await addNewGun(client, {
          name:"AK-47",
          bullets: 30  
      })

    }
    catch (e){
        console.log(e)
    }finally{
       await client.close()
    }
}

main().catch(console.error)

async function addNewGun(client, newGun){
    const result = await client.db("myGuns").collection("guns").insertOne(newGun);
    console.log(`the new guns id is ${result.insertedId}`)
    
}