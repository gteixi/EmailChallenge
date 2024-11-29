// import { render, screen, fireEvent } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import { useLoaderData } from '@remix-run/react';
// import Inbox from './index';

// describe('Inbox page', () => {
//   const mockMessages = [
//     { id: '1', title: 'Message 1', content: 'Content 1' },
//     { id: '2', title: 'Message 2', content: 'Content 2' },
//   ];

//   beforeEach(() => {
//     (useLoaderData as jest.Mock).mockReturnValue(mockMessages);
//   });

//   it('renders a list of messages from the loader data', () => {
//     render();

//     const cards = screen.getAllByTestId('card');
//     expect(cards).toHaveLength(mockMessages.length);
//     expect(cards[0]).toHaveTextContent('Message 1');
//     expect(cards[1]).toHaveTextContent('Message 2');
//   });

//   it('updates the MessageDetails when a card is clicked', () => {
//     render();
//     const messageDetails = screen.getByTestId('message-details'); // Pending add ids
//     expect(messageDetails).toHaveTextContent('Message 1');

//     const secondCard = screen.getAllByTestId('card')[1];
//     fireEvent.click(secondCard);


//     expect(messageDetails).toHaveTextContent('Message 2');
//   });
// });
