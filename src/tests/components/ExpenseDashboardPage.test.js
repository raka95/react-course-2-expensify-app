import React from 'react';
import {shallow} from 'enzyme';
import ExpenseDashboardPAge from '../../components/ExpenseDashboardPage';

test("should render ExpenseDashboardPage",()=>{
    const wrapper=shallow(<ExpenseDashboardPAge />);
    expect(wrapper).toMatchSnapshot();
});