import prisma from 'lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await prisma.counters.delete({
      where: {
        slug: "atlantic-ocean",
      },
    })
    await prisma.counters.delete({
      where: {
        slug: "porto-and-wine",
      },
    })
    await prisma.counters.delete({
      where: {
        slug: "life-in-lisbon",
      },
    })
    await prisma.counters.delete({
      where: {
        slug: "the-beginning",
      },
    })

    const totalViews = await prisma.counters.aggregate({
      _sum: {
        views: true
      }
    });


    return res.status(200).json({ total: totalViews?._sum?.views?.toString() });
  } catch (error) {
    // @ts-ignore
    return res.status(500).json({ message: error.message });
  }
}