import { prisma } from "~/db.server";

export async function loader() {
  const messages = await prisma.message.findMany();

  return new Response(JSON.stringify(messages), {
    headers: { "Content-Type": "application/json" },
  });
}
