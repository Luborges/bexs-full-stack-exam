// Link.react.test.js
import React from 'react';
import Home from '../pages/Home';
import Post from '../components/Post';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Home', () => {
    const question = {
        id: 1,
        text: 'Primeira Pergunta',
        creationDate: new Date(),
        user: 'contato@email.com',
    }

    const homeComponent = shallow(
        <Home />
    );

    const postComponent = shallow(
        <Post question={question} />
    );

    it('Check home render', () => {
        expect(homeComponent.find('#title').text()).toBe('Envie sua pergunta');
    });

    it('Check post render', () => {
        expect(postComponent.find('#text').text()).toBe('Primeira Pergunta');
    });
});