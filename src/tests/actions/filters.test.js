import { setStartDate,setEndDate, setTextFilter , sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('should generate setStartDAte',()=>{
    const action=setStartDate(moment(0));
    expect(action).toEqual({
        type:'Start-Date',
        num:moment(0)
    });
});
test('should generate setEndDAte',()=>{
    const action=setEndDate(moment(0));
    expect(action).toEqual({
        type:'End-Date',
        num:moment(0)
    });
});
test('should generate set test filter with provided value',()=>{
    const action=setTextFilter("icecoffee");
    expect(action).toEqual({
        type:"Text-Filter",
        text:"icecoffee"
    });
});
test('should generate set text filter with default value',()=>{
    const action=setTextFilter();
    expect(action).toEqual({
        type:"Text-Filter",
        text:''
    });
});
test ('should generate setByDate',()=>{
    const action=sortByAmount();
    expect(action).toEqual({
        type:"Sort-Amount",
        sortBy:"amount"
    });
});
test ('should generate setByAmount',()=>{
    // const action=sortByDate();
    expect(sortByDate()).toEqual({
        type:"Sort-Date",
        sortBy:"Date"
    });
});