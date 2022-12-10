import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "./../../../lib/prisma";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const { name, email, avatar, title, bio } = req.body;

  await prisma.user.create({
    data: {
      name,
      email,
      avatar,
      title,
      bio,
    },
   
    select: {
      id: true,
    },
  });

  return res.status(201).json({
    id: true,
  });
}
