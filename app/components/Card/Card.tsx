import { Message } from '@prisma/client';
import { formatDistanceToNow } from 'date-fns';

type CardProps = {
  message: Message;
  onClick: () => void;
};

export const Card = ({ message, onClick }: CardProps) => {
  return (
    <button key={message.id} onClick={onClick} className="card">
      <div>
        {message.from} -{' '}
        {formatDistanceToNow(message.createdAt, { addSuffix: true })}
      </div>
      <h3 className="text-xl font-bold mb-2">{message.subject}</h3>
      <p className="test">{message.body.substring(0, 30)}</p>
      <div className="tags">{message.tags}</div>
      <div></div>
    </button>
  );
};
