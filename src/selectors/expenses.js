// get visible expenses
export default (expenses,{text,sortBy,startDate,endDate})=>{
// const getVisibleExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((val)=>{
     const createdAtMoment=val.createdAt;
     const startDateMAtch=startDate ? startDate.isSameOrBefore(createdAtMoment,"day") :true ;
     const endDateMatch=endDate ?  endDate.isSameOrAfter(createdAtMoment,"day"):true ;
     const textMatch=val.description.toLowerCase().includes(text);
 
     return startDateMAtch&&endDateMatch&&textMatch;
    }).sort((a,b)=>{
        if(sortBy==="date")
         return b.createdAt-a.createdAt;
         else if(sortBy==="amount")
         return b.amount-a.amount;
    })
 };
 