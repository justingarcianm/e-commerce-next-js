import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default async function handler(req,res) {
    console.log("request", req)
    if(req.method === 'POST') {
        return await addDesigner(req,res)
    } else if(req.method ==='GET'){
        return await readDesigners(req,res)
    } else {
        return res.status(405).json({message:'Method not allowed', success:false})
    }
}

async function readDesigners(req,res) {

    try {
        const designers = await prisma.designer.findMany()
        return res.status(200).json(designers, {success:true})
    } catch(err) {
        console.error(err)
        res.status(500).json({error:"Error reading designers from DB", success:false})
    }
}

async function addDesigner(req,res) {

    try {
        const newEntry = await prisma.designer.create({
            data: {
                name: req.body.name
            }
        })

        return res.status(200).json(newEntry, {success:true})
    } catch(err) {
        console.error("Request Error",err)
        res.status(500).json({error:'Error adding designer', success:false})
    }
}