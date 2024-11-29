import { Message } from '@prisma/client';
import { formatDistanceToNow } from 'date-fns';

type MessageDetailsProps = {
  message: Message;
};

export const MessageDetails = ({ message }: MessageDetailsProps) => {
  return (
    <div className="messageDetailsContainer">
      <div>
        {message.from} -{' '}
        {formatDistanceToNow(message.createdAt, { addSuffix: true })}
      </div>
      <h3 className="text-xl font-bold mb-2">{message.subject}</h3>
      <p className="test">{message.body}</p>
    </div>
  );
};
