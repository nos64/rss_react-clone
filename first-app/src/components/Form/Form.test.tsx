// import React from 'react';
// import { render, screen, fireEvent } from '@testing-library/react';
// import Form from './Form';
// import userEvent from '@testing-library/user-event';

// describe('Form', () => {
//   it('render Form component', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByTestId('form')).toBeInTheDocument();
//   });

//   it('render Name input', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
//   });

//   it('render uncorrect Name input', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('firstName'), '123');
//     fireEvent.click(screen.getByTestId('form-button'));
//     expect(await screen.findByText(/Please enter your correct first name/i)).toBeInTheDocument();
//   });

//   it('render correct Name input', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('firstName'), 'Test');
//     fireEvent.click(screen.getByTestId('form-button'));
//     expect(screen.queryByText(/Please enter your correct first name/i)).not.toBeInTheDocument();
//   });

//   it('render Surname input', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/Surname/i)).toBeInTheDocument();
//   });

//   it('render uncorrect Surname input', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('surname'), '123');
//     fireEvent.click(screen.getByTestId('form-button'));
//     expect(await screen.findByText(/Please enter your correct surname/i)).toBeInTheDocument();
//   });

//   it('render correct Surname input', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('surname'), 'Test');
//     fireEvent.click(screen.getByTestId('form-button'));
//     expect(screen.queryByText(/Please enter your correct surname/i)).not.toBeInTheDocument();
//   });

//   it('render Date of birth input', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/Date of birth/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('dateOfBirth'), '11.11.2011');
//     fireEvent.click(screen.getByTestId('form-button'));
//     expect(screen.queryByText(/Please select your correct date of birth/i)).not.toBeInTheDocument();
//   });

//   it('render Male input', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.queryByLabelText(/Male/)).toBeInTheDocument();
//     const maleRadio = screen.getByTestId('male');
//     fireEvent.click(maleRadio);
//     fireEvent.click(maleRadio);
//     expect(screen.queryByLabelText(/Male/)).toBeChecked();
//   });

//   it('render Female input', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.queryByLabelText(/Female/)).toBeInTheDocument();
//     const femaleRadio = screen.getByTestId('female');
//     fireEvent.click(femaleRadio);
//     fireEvent.click(femaleRadio);
//     expect(screen.queryByLabelText(/Female/)).toBeChecked();
//   });

//   it('render uncorrect E-mail input', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('email'), 'Hello, World!');
//     fireEvent.click(screen.getByTestId('form-button'));
//     expect(await screen.findByText(/Please enter correct E-mail/i)).toBeInTheDocument();
//   });

//   it('render correct E-mail input', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('email'), 'test@test.com');
//     fireEvent.click(screen.getByTestId('form-button'));
//     expect(screen.queryByText(/Please enter correct E-mail/i)).not.toBeInTheDocument();
//   });

//   it('render Country input', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
//   });

//   it('render Avatart input', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/Avatar/i)).toBeInTheDocument();
//   });

//   it('simulate Avatart upload file', async () => {
//     render(
//       <Form
//         createCard={function async(): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/Avatar/i)).toBeInTheDocument();
//     const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
//     const inputFile: HTMLInputElement = screen.getByTestId(/picture/i);
//     expect(screen.getByTestId(/picture/i)).toBeInTheDocument();
//     // await act(async () => {
//     //   await waitFor(() => {
//     //     userEvent.upload(inputFile, fakeFile);
//     //   });
//     // });
//     await userEvent.upload(inputFile, fakeFile);
//     expect(inputFile.files![0]).toStrictEqual(fakeFile);
//     expect(inputFile.files!.item(0)).toStrictEqual(fakeFile);
//     expect(inputFile.files).toHaveLength(1);
//   });

//   it('render Checkbox input', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByRole('checkbox')).toBeInTheDocument();
//   });

//   it('click Checkbox ', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     const checkbox = screen.getByRole('checkbox');
//     fireEvent.click(checkbox);
//     fireEvent.click(checkbox);
//     expect(screen.getByRole('checkbox')).toBeChecked();
//   });

//   it('render Button input', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByRole('button')).toBeInTheDocument();
//   });

//   it('disable Button', () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByTestId('form-button')).toBeDisabled();
//   });

//   it('Generate card & disable submit btn after generate', async () => {
//     render(
//       <Form
//         createCard={function (): void {
//           throw new Error('Function not implemented.');
//         }}
//       />
//     );
//     expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('firstName'), 'Test');
//     expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('surname'), 'Test');
//     expect(screen.getByLabelText(/Date of birth/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('dateOfBirth'), '11.11.2011');
//     const maleRadio = screen.getByTestId('male');
//     fireEvent.click(maleRadio);
//     fireEvent.click(maleRadio);
//     expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('email'), 'test@test.com');
//     expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
//     await userEvent.type(screen.getByTestId('country'), 'Russia');
//     expect(screen.getByLabelText(/Avatar/i)).toBeInTheDocument();
//     const fakeFile = new File(['hello'], 'hello.png', { type: 'image/png' });
//     const inputFile: HTMLInputElement = screen.getByTestId(/picture/i);
//     expect(screen.getByTestId(/picture/i)).toBeInTheDocument();
//     await userEvent.upload(inputFile, fakeFile);
//     const checkbox = screen.getByRole('checkbox');
//     fireEvent.click(checkbox);
//     fireEvent.click(checkbox);
//     const submitBtn = screen.getByTestId('form-button');
//     expect(submitBtn).toBeInTheDocument();
//     fireEvent.click(submitBtn);
//     expect(screen.getByTestId('form-button')).toBeDisabled();
//   });
// });
