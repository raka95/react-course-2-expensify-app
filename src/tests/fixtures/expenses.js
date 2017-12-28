import moment from 'moment';
// const expenses=[
    export default [
    {
        id:"1",
        description:"Gum",
        note:'',
        amount:190,
        createdAt:moment(0).valueOf()
    },
    {
        id:"2",
        description:"rent",
        note:'',
        amount:2000,
        createdAt:moment(0).subtract(4,"days").valueOf()
    },
    {
        id:"3",
        description:"coffee",
        note:'',
        amount:400,
        createdAt:moment(0).add(5,'days').valueOf()
    } 
];