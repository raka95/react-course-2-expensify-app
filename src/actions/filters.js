//text-filter

export const setTextFilter=(text="")=>(
    {
        type:"Text-Filter",
        text
    });

//sort-by-amount-filter

export const sortByAmount=()=>(
    {
        type:"Sort-Amount",
        sortBy:"amount"
    }
);
//sort-by-date
export const sortByDate=()=>(
    {
        type:"Sort-Date",
        sortBy:"Date"
    }
);

//set-start-date

export const setStartDate=(num=undefined)=>({
    type:"Start-Date",
    num
});

//set-end-date
export const setEndDate=(num=undefined)=>({
    type:"End-Date",
    num
 });