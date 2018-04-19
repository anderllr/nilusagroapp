// __tests__/Home-test.js
import React from 'react';
import Home from '../src/screens/Home';

//Note: test renderer must be required after react-native
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const hello = renderer.create(
        <Home />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});