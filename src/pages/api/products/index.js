import {
    prisma
} from "../../../utils/prisma"

export default async function handler(req, res) {

    const query = req.query.prisma

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