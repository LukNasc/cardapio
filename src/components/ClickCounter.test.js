import React from 'react';
import { shallow } from 'enzyme';
import ClickCounter from './ClickCounter';

it("ClickCounter tenha o texto alterado após o clique", () => {
    const meuComponente = shallow(<ClickCounter />);
    expect(meuComponente.find("#check-status").text()).toEqual("Off");
    meuComponente.find('input').simulate('change');
    expect(meuComponente.find("#check-status").text()).toEqual("Off");


});

it('ClickCounter deve ter o total de clicks igual a 2', () => {
    const meuComponente = shallow(<ClickCounter />);

    meuComponente.find('input').simulate('change').simulate('change');
    expect(meuComponente.state().totalClicks).toEqual(2);
});