import { MongoDbHandler } from "./mongoDbHandler";

export function getHandler(dataSourceName: string){
    const type = process.env[dataSourceName.toUpperCase() + ".SOURCE_TYPE"];
    console.log("Type", type)

    switch(type){
        case "Database":
            const databaseType = process.env[dataSourceName.toUpperCase() + ".DATABASE_TYPE"];
            switch(databaseType){
                case "MongoDB":
                    console.log("I am supposed to be here");
                    return new MongoDbHandler();
            }
        
        default: 
            return null;
    }
    
}