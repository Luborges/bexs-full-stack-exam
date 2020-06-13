// Link.react.test.js
import React from 'react';
import Login from '../pages/Login';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import sinon from 'sinon';

configure({adapter: new Adapter()});

describe('Login on site', () => {
    const submitEvent = jest.fn();
    submitEvent['preventDefault'] = jest.fn();

    const testValues = {
        initialEmail: 'email@domain.com',
        initialPassword: 'pass',
        handleSubmit: submitEvent,
    };

    const component = shallow(
        <Login {...testValues} />
    );

    sinon.stub(window.location, 'assign');
    it('Check e-mail', () => {
        component.find('#email').simulate('change', {target: {value: 'email@domain.com'} });
        expect(component.find('#email').prop('value')).toEqual('email@domain.com');
    });

    it('Check password', () => {
        component.find('#password').simulate('change', {target: {value: 'pass'} });
        expect(component.find('#password').prop('value')).toEqual('pass');
    });

    it('Submit works', () => {
        expect(component.find('#form-login').length).toBe(1);
        component.find('#form-login').simulate('submit', testValues.handleSubmit);
    });
});