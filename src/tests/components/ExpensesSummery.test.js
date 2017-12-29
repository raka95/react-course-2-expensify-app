import React from 'react';
import {shallow} from 'enzyme';
import {ExpensesSummery} from '../../components/ExpensesSummery';
import expenses from '../fixtures/expenses';

test("should render expensesLength in expenseSummery",()=>{
    const wrapper = shallow(<ExpensesSummery expense={expenses}/>);
    expect(wrapper).toMatchSnapshot();
});

// test("should render expensesLength in expenseSummery",()=>{
//     const wrapper = shallow(<ExpensesSummery expense={expenses}/>);
//     expect(wrapper).toMatchSnapshot();
// });