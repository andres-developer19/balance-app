import React from 'react'
import {useGlobalState} from '../../context/GlobalState'
import {TransactionItem} from './TrasnsactionItem'

function TransactionList() {

    const {transactions} = useGlobalState()

  return (
    <>
    <h3>HISTORY</h3>
    <ul>
    {transactions.map(transaction => (
    <TransactionItem key={transaction.id} transaction={transaction} />
    ))}
    </ul>
    </>
  )
}

export default TransactionList