import { MongoClient } from "mongodb";

export class MongoDbHandler implements IHandler{
    async handleRequest(requestBody: any): Promise<any> {
        const mongoDBUriName = requestBody.dataSource + "." + "MONGOURI";
        if(!process.env[mongoDBUriName]){
            return null;
        }
        console.log("Mongo URL", mongoDBUriName, process.env[mongoDBUriName])
        const client = await MongoClient.connect(process.env[mongoDBUriName] as string, { });
        const db = client.db(requestBody.dbName);
        let response = {};
    
        switch(requestBody.operation){
            case "READ":
                response = await db.collection(requestBody.collectionName).find({...JSON.parse(requestBody.filter)}).toArray();
                break;
            case "CREATE":
                response = (await db.collection(requestBody.collectionName).insertOne(JSON.parse(requestBody.data))).acknowledged;
                break;
        }
        console.log("Mongo Response", response);
        client.close();
        return response;
    }
    
}
