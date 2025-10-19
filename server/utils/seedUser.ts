import { PrismaClient } from "../generated/prisma";
const prisma = new PrismaClient();

function seedUser() {
  prisma.user.createMany({
    data: [
      { name: "Alice", email: "alice@alice.com", password: "1234" },
      { name: "Alice2", email: "alice@alice.com", password: "1234" },
      { name: "Alice3", email: "alice@alice.com", password: "1234" },
      { name: "Alice4", email: "alice@alice.com", password: "1234" },
    ],
  });
}

export default seedUser;
