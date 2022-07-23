import {
    prisma
} from "../../../utils/prisma";

export default async function handler(req, res) {

    try {
        const discounted = await prisma.product.findMany({
            take: 3,
            orderBy: {
                discount: 'asc'
            },
            select: {
                name: true,
                price: true,
                slug: true,
                id: true,
                discount: true,
                Media: {
                    take: 1,
                    select: {
                        link: true,
                        id: true
                    }
                }
            }
        })

        return res.status(200).json(discounted, {
            success: true
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: "Error reading discounted products from DB",
            success: false
        })
    }
}