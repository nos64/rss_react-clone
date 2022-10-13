import React from 'react';
import { render, screen } from '@testing-library/react';
import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  it('render Form component', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });

  it('render Name input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
  });

  it('input text in first name', async () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByTestId('firstName')).toBeInTheDocument();
    await userEvent.type(screen.getByTestId('firstName'), '123');
    expect(screen.getByText('123')).toBeInTheDocument();
    userEvent.click(screen.getByTestId('form-button'));
    expect(screen.getByText('Please enter your correct first name')).toBeInTheDocument();
  });

  it('render Surname input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByLabelText(/Surname/i)).toBeInTheDocument();
  });

  it('render Date of birth input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByLabelText(/Date of birth/i)).toBeInTheDocument();
  });

  it('render Male input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByLabelText('Male')).toBeInTheDocument();
  });

  it('render Female input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByLabelText('Female')).toBeInTheDocument();
  });

  it('render E-mail input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
  });

  it('render Country input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByLabelText(/Country/i)).toBeInTheDocument();
  });

  it('render Avatart input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByLabelText(/Avatart/i)).toBeInTheDocument();
  });

  it('render Checkbox input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('click Checkbox ', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    userEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('render Button input', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('disable Button', () => {
    render(
      <Form
        createCard={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(screen.getByTestId('form-button')).toBeDisabled();
  });
});
