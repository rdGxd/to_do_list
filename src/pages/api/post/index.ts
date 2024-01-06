import { prisma } from "../../../../prisma/lib/prisma";

export default async function handle(req, res) {
  const { task, user } = req.body;

  const result = await prisma.post.create({
    data: {
      title: task,
      content: task,
      published: true,
      author: { connect: { email: user } },
    },
  });
  res.json(result);
  console.log(result);
}
