import prisma from 'lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.slug.toString();

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.counters.upsert({
        where: { slug },
        create: { slug },
        update: { views: { increment: 1 } }
      });

      return res.status(200).json({
        total: newOrUpdatedViews.views.toString()
      });
    }

    if (req.method === 'GET') {
      const counters = await prisma.counters.findUnique({
        where: { slug }
      });

      return res.status(200).json({ total: counters ? counters.views.toString() : '0' });
    }
  } catch (error) {
    // @ts-ignore
    return res.status(500).json({ message: error.message });
  }
}