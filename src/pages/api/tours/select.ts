
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "./../../../lib/prisma";


// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req: NextApiRequest, res: NextApiResponse) {

    const  id  = req.query.id;

   
    const tour = await prisma.tour.findFirst({
        where: {
            id: id,
        },
        select: {
            id: true,
            title: true,
            description: true,
            photo: true,
            imgs: {
                select: {
                    url: true,
                }
            }
        }

    });
    
    return res.status(201).json({
        tour: {
            title: tour.title,
            description: tour.description,
            photo: tour.photo,

        //     imgs: [{
        //       url: url
        //  }],
}
    }
    );
    
    
}