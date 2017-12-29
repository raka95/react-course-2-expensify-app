import React from "react";
import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'
test("should return 0 if no expenses",()=>{
 const selector=selectExpensesTotal([]);
 expect(selector).toBe(0);
});

test("should correctly add up to a single expense",()=>{
    const selector=selectExpensesTotal([expenses[0]]);
    expect(selector).toBe(190);
});

test("should correctly add up a multiple expenses",()=>{
    const selector=selectExpensesTotal(expenses);
    expect(selector).toBe(2590);
});