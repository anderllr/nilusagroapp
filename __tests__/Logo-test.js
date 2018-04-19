// __tests__/Home-test.js
import React from 'react';
import Logo from '../src/components/Logo';

//Note: test renderer must be required after react-native
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const logo = renderer.create(
        <Logo />
    ).toJSON();
    expect(tree).toMatchSnapshot();
});