import { prisma } from "../../../../prisma/lib/prisma";

export default async function handle(req, res) {
  const { id } = req.query;

  if (req.method === "DELETE") {
    const post = await prisma.post.delete({
      where: {
        id,
      },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    );
  }
}
