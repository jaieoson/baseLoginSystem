import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./../../../lib/prisma";



// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const  id  = req.query.id;

  const user = await prisma.user.findFirst({
    where: {
      id: id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      avatar: true,
      tours: {
        select: {
          id: true,
          title: true,
          photo: true,
          tambnail: true,
          imgs: {
            select: {
              url: true,
            }
          }
        },
      },
    },
 
  });

  return res.status(201).json({
    user: user
  });
}
