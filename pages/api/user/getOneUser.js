import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const id = Number(req.headers.id);
  const prisma = new PrismaClient();
  const user = await prisma.user.findUnique({
    where: {
      id: id,
    },
  });
  res.json(user);
}
