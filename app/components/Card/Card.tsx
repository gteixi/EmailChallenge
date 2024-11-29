import { Message } from '@prisma/client';
import { formatDistanceToNow } from 'date-fns';

type CardProps = {
  message: Message;
  onClick: () => void;
};

export const Card = ({ message, onClick }: CardProps) => {
  const formatDate = (date: Date) => {
    return formatDistanceToNow(date, { addSuffix: true });
  };

  return (
    <button key={message.id} onClick={onClick} className="card">
      <div>
        {message.from} - {formatDate(message.createdAt)}
      </div>
      <h3 className="text-xl font-bold mb-2">{message.subject}</h3>
      <p className="test">{message.body.substring(0, 37)}</p>
      <div className="tags">{message.tags}</div>
      <div></div>
    </button>
  );
};
