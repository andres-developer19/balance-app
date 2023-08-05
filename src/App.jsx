import React from "react"
import Header from './componentes/Header'
import Balance from './componentes/Balance'
import TransanctionForm from "./componentes/transactions/TransanctionForm"
import TransactionList from "./componentes/transactions/TransactionList"
import {GlobalProvider} from './context/GlobalState'
import IncomeExpenses from "./componentes/IncomeExpenses"

function App() {
  return (
    <GlobalProvider >
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="bg-zinc-800 p-10 rounded-lg flex">
          <div>
          <Header />
        <IncomeExpenses />
        <Balance />
        <TransanctionForm />
          </div>
        <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App