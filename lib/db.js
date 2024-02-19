import { MongoClient } from "mongodb";

export async function connectToDatabase(){
    const client = await MongoClient.connect('mongodb+srv://universal22:MohCUV9zyYMnJMAQ@test.hofjrlw.mongodb.net/universal?retryWrites=true&w=majority');

    return client;
}