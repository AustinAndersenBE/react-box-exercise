import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', () => {
  render(<NewBoxForm createBox={() => {}} />);
});

it('matches snapshot', () => {
  const tree = renderer.create(<NewBoxForm createBox={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('calls createBox with form data on submit', () => {
    const createBox = jest.fn(); //create mock function

    //returns an object with functions that allow us to interact with the rendered component
    const { getByLabelText, getByText } = render(<NewBoxForm createBox={createBox} />);
  
    //simulate user entering data
    fireEvent.change(getByLabelText('Height'), { target: { value: '100' } });
    fireEvent.change(getByLabelText('Width'), { target: { value: '100' } });
    fireEvent.change(getByLabelText('Background Color'), { target: { value: 'red' } });
  
    fireEvent.click(getByText('Add a new box!'));
  
    expect(createBox).toHaveBeenCalledWith(expect.objectContaining({
      height: '100',
      width: '100',
      backgroundColor: 'red'
    }));
  });