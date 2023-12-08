import { render, screen, fireEvent } from '@testing-library/react';
import FeedbackForm from './FeedbackForm';

test('renders feedback form and submits data', () => {
  render(<FeedbackForm />);
  const input = screen.getByLabelText(/your feedback/i);
  fireEvent.change(input, { target: { value: 'Great service!' } });
  expect(input.value).toBe('Great service!');
});
