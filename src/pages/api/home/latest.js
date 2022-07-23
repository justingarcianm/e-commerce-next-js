import {
    prisma
} from "../../../utils/prisma";

export default async function handler(req, res) {
    try {
        const latest = await prisma.product.findMany({
            take: 4,
            orderBy: {
                createdAt: 'asc'
            },
            select: {
                name: true,
                Media: {
                    take: 1,
                    select: {
                        id: true,
                        link: true
                    }
                },
                price: true,
                slug: true,
                id: true,
            }
        })

        return res.status(200).json(latest, {
            success: true
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: "Error reading latest products from DB",
            success: false
        })
    }
}