import React from 'react'
import {useGlobalState} from '../../context/GlobalState'
import {TransactionItem} from './TransactionItem'

function TransactionList() {

    const {transactions} = useGlobalState()

  return (
    <>
    <h3 className='text-slate-300 text-x1 block font-bold'>HISTORY</h3>
    <ul>
    {transactions.map(transaction => (
    <TransactionItem key={transaction.id} transaction={transaction} />
    ))}
    </ul>
    </>
  )
}

export default TransactionList