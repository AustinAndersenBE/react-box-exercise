import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import App from './App';


it('renders without crashing', () => {
    render(<App />);
  });

it('matches snapshot', () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

