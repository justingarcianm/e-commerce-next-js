import {
    PrismaClient
} from "@prisma/client";

import slugify from "../../utils/slugify";

const prisma = new PrismaClient()

export default async function handler(req, res) {

    const query = req.query.prisma

    if (req.method === 'POST') {
        return await addProduct(req, res)
    } else if (req.method === 'GET') {
        return await readProduct(req, res)
    } else if (req.method === 'PUT') {
        return await updateProduct(req, res)
    } else if (req.method === 'DELETE') {
        return await deleteProduct(req, res)
    } else {
        return res.status(405).json({
            message: 'Method not allowed',
            success: false
        })
    }
}

async function readProduct(req, res) {

    try {
        const products = await prisma.product.findMany()
        return res.status(200).json(products, {
            success: true
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: "Error reading products from DB",
            success: false
        })
    }
}

async function addProduct(req, res) {

    try {
        const newEntry = await prisma.designer.create({
            data: {
                name: req.body.name
            }
        })

        return res.status(200).json(newEntry, {
            success: true
        })
    } catch (err) {
        console.error("Request Error", err)
        res.status(500).json({
            error: 'Error adding designer',
            success: false
        })
    }
}