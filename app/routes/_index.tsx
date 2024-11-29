import { LoaderFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import { prisma } from '~/db.server';
import { Message } from '@prisma/client';

import { useState } from 'react';

import { Card } from '~/components/Card/Card';
import { MessageDetails } from '~/components/MessageDetails/MessageDetails';

import mockMessages from '~/mocks/mockMessages';
import './../styles/styles.css';

export const loader: LoaderFunction = async () => {
  try {
    const messages = await prisma.message.findMany();
    return new Response(JSON.stringify(messages), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching messages:', error);

    return new Response(
      JSON.stringify({
        error: 'Failed to fetch messages. Please try again later.',
      }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
};

export default function Inbox() {
  const messages = useLoaderData<Message[]>();

  const [selectedCard, setSelectedCard] = useState(messages[0]);

  const handleCardClick = (card: (typeof messages)[0]) => {
    setSelectedCard(card);
  };

  const messagesContent =
    messages && messages.length > 0 ? messages : mockMessages;

  return (
    <div className="mainContainer">
      <>
        <div className="cardsContainer">
          {messagesContent.map((message) => (
            <Card
              key={message.id}
              message={message}
              onClick={() => handleCardClick(message)}
            />
          ))}
        </div>
        <MessageDetails message={selectedCard} />
      </>
    </div>
  );
}
