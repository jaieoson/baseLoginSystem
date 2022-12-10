import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


async function main(){

    // criar metodos para criar usuário e todos os outras tabelas
   // criar usuário a cada novo email que não esteja cadastrado

// se o email existe no banco, seleciona este usuário

    await prisma.user.create({
        data:{
            id: 'user-01',
            name: 'jason',
            email: 'jaieosom@gmail.com',
     
        }
    })

// ao criar e inserir um tour insere também as imagens em img



}

main()