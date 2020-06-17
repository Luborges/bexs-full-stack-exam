// Link.react.test.js
import React from 'react';
import Details from '../pages/Details';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Detail', () => {
    const match = {
        params: {
            id: 1,
        }
    }

    const detailComponent = shallow(
        <Details match={match} />
    );

    it('Check detail render', () => {
        expect(detailComponent.find('#subtitle').text()).toContain('Pergunta feita as');
    });
});