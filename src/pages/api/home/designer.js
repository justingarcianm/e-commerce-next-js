import {
    prisma
} from "../../../utils/prisma";

export default async function handler(req, res) {
    try {
        const designer = await prisma.designer.findFirst({
            where: {
                featured: true
            },
            include: {
                Product: {
                    select: {
                        name: true,
                        Media: {
                            take: 1
                        },
                        price: true,
                        slug: true,
                        id: true,
                    },
                    orderBy: {
                        updatedAt: 'asc'
                    },
                    take: 3
                }
            }
        })

        return res.status(200).json(designer, {
            success: true
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({
            error: "Error reading featured designer from DB",
            success: false
        })
    }
}