import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Box from './Box';

// Smoke Test
it('renders without crashing', () => {
  render(<Box id="1" handleRemove={() => {}} />);
});

// Snapshot Test
it('renders correctly', () => {
  const tree = renderer
    .create(<Box id="1" handleRemove={() => {}} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});