import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const { name, email } = req.body;

  const prisma = new PrismaClient();
  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
    },
  });
  res.json(user);
}
