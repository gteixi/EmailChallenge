import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { prisma } from "~/db.server";


export const loader: LoaderFunction = async () => {
  try {
    const messages = await prisma.message.findMany();
    return new Response(JSON.stringify(messages), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("Error fetching messages:", error);

    return new Response(
      JSON.stringify({ error: "Failed to fetch messages. Please try again later." }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
};


interface Message {
  id: string;
  subject: string;
  body: string;
}

export default function Inbox() {
  const messages = useLoaderData<Message[]>();

  return (
    <div>
      <h1>Inbox</h1>
      <ul>
        {messages.map((message: { id: string; subject: string; body: string }) => (
          <li key={message.id}>
            <h2>{message.subject}</h2>
            <p>{message.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
