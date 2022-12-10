import { GetServerSideProps, NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import { prisma } from "./../../../lib/prisma";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {
  const session = await getSession();

 // if (session) {
 //   const userId = session.user?.email;

    const { title, description, userId, photo, tambnail, imgs } = req.body;

    // criar um array com {url:imgs},

    await prisma.tour.create({
      data: {
        title,
        description,
        userId,
        photo,
        tambnail,
        imgs: {
          createMany: {
            data: imgs.map((img: string) => ({ url: img })),
          },
        },
      },
    });

    return res.status(201).json({});
 // }
}
