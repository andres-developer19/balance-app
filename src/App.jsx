import React from "react"
import Header from './componentes/Header'
import Balance from './componentes/Balance'
import TransanctionForm from "./componentes/transactions/TransanctionForm"
import TransactionList from "./componentes/transactions/TransactionList"
import {GlobalProvider} from './context/GlobalState'
import IncomeExpenses from "./componentes/IncomeExpenses"

function App() {
  return (
    <GlobalProvider>
    <Header />
    <IncomeExpenses />
    <Balance />
    <TransanctionForm />
    <TransactionList />
    </GlobalProvider>
  )
}

export default App