import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Yura",
      email: "yura@example.com",
      posts: {
        create: {
          title: "My First Post",
          body: "Hello from MongoDB!",
          slug: "my-first-post",
        },
      },
    },
  });

  console.log("User created:", user);
}

main()
  .catch(async (e) => {
    console.error("Error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
