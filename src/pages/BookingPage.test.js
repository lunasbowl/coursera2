import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import BookingPage from './BookingPage';

describe('BookingPage Component', () => {
  it('should render BookingPage component', () => {
    render(<BookingPage />);
    const nameInput = screen.getByLabelText('Name');
    const dateInput = screen.getByLabelText('Choose Date');
    const timeSelect = screen.getByLabelText('Choose Time');
    const guestsInput = screen.getByLabelText('Number of Guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Make Reservation');

    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(timeSelect).toBeInTheDocument();
    expect(guestsInput).toBeInTheDocument();
    expect(occasionSelect).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('should show error messages when form is submitted with empty fields', () => {
    render(<BookingPage />);
    const submitButton = screen.getByText('Make Reservation');
    fireEvent.click(submitButton);

    const nameError = screen.getByText('Please enter your name.');
    const dateError = screen.getByText('Please choose a date.');
    const timeError = screen.getByText('Please choose a time.');
    const guestsError = screen.getByText('Please enter the number of guests.');
    const occasionError = screen.getByText('Please select an occasion.');

    expect(nameError).toBeInTheDocument();
    expect(dateError).toBeInTheDocument();
    expect(timeError).toBeInTheDocument();
    expect(guestsError).toBeInTheDocument();
    expect(occasionError).toBeInTheDocument();
  });

  it('should submit the form when all fields are filled', () => {
    const submitFormMock = jest.fn();
    render(<BookingPage submitForm={submitFormMock} />);
    const nameInput = screen.getByLabelText('Name');
    const dateInput = screen.getByLabelText('Choose Date');
    const timeSelect = screen.getByLabelText('Choose Time');
    const guestsInput = screen.getByLabelText('Number of Guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByText('Make Reservation');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(dateInput, { target: { value: '2023-09-20' } });
    fireEvent.change(timeSelect, { target: { value: '17:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });
    fireEvent.change(occasionSelect, { target: { value: 'Birthday' } });
    fireEvent.click(submitButton);

    expect(submitFormMock).toHaveBeenCalledWith({
      name: 'John Doe',
      date: '2023-09-20',
      time: '17:00',
      numberGuests: '4',
      occasion: 'Birthday',
    });
  });
});
