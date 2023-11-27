import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();
import UserService from './services/UserServices'


async function main() {
    await prisma.user.create({
      data: {
          nome: 'otavio fulano',
          email: 'fulano@gmail.com'
      }
    })
}


//async function main() {
//     const user = await prisma.user.create({
//         data: {
//             nome: "P",
//             email: "phlb@gmail.com"
//         }
//     })
//    console.log(await UserService.listUsers)
//}



main()
    .then(async () => {
    await prisma.$disconnect()
    })

    .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})