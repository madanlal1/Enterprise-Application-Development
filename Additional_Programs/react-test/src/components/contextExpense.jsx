import {createContext} from 'react';

const initialTransaction = [
    {amount:500, desc: 'Cash'},
    {amount:-200, desc: 'Camera'},
    {amount:-100, desc: 'Book'}
]

export const contextExpense = createContext(initialTransaction);