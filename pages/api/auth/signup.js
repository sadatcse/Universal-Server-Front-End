

import { hashPassword } from "../../../lib/auth";
import { connectToDatabase } from "../../../lib/db";

async function handler(req, res) {
    // if (req.method !== 'POST') {
    //     return;
    // }

    const data = req.body;

    const { email, password } =data;

    if (!email || !email.includes('@') || !password || password.trim().length <7){
       res.status(422).json({message:'Invalid iput'});
       return;
    }
    const client = await connectToDatabase();

    const db = client.db();

    const exitsitingUser =await db.collection('User').findOne({email: email});

    if (exitsitingUser) {
        res.status(422).json({message:"User exists already"});
        client.close();
        return;
    }

    const hashedPassword =await hashPassword(password);
    
    const result = await db.collection('User').insertOne({
        email:email,
        password:hashedPassword,
        role:"Survey Participant"
    });

    res.status(201).json({message:'Create User!'});
    client.close();
    }



export default handler;