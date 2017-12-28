import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from "../../components/EditExpensePage";
// import { editExpense, removeExpense } from '../../actions/expenses';

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage
            expense={expenses[1]}
            removeExpense={removeExpense}
            editExpense={editExpense}
            history={history}
        />
    );
});

test("Render EditExpensePage to be a class based component", () => {
    expect(wrapper).toMatchSnapshot();
});

test("should handle editExpense", () => {
    wrapper.find("ExpenseForm").prop("onSubmit")(expenses[1]);
    expect(editExpense).toHaveBeenLastCalledWith(expenses[1].id, expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
});

test("should handle removeExpense", () => {
    wrapper.find('button').simulate('click');
    expect(removeExpense).toHaveBeenLastCalledWith({ id: expenses[1].id });
    expect(history.push).toHaveBeenLastCalledWith('/');
});
