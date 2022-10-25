import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

faker.locale = 'de';

const prisma = new PrismaClient()

const userData = Array(200).fill(null).map(() => (
  {
    name: faker.name.fullName(),
    email: faker.internet.email(),
    posts: {
      create: [
        {
          title: faker.commerce.productName(),
          content: faker.internet.url(),
          published: faker.datatype.boolean(),
        },
      ],
    }
  }
) );

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
