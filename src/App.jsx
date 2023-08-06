import React from "react"
import Header from './componentes/Header'
import Balance from './componentes/Balance'
import TransanctionForm from "./componentes/transactions/TransanctionForm"
import TransactionList from "./componentes/transactions/TransactionList"
import {GlobalProvider} from './context/GlobalState'
import IncomeExpenses from "./componentes/IncomeExpenses"
import ExpenseChart from "./componentes/ExpenseChart"

function App() {
  return (
    <GlobalProvider >
      <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
        <div className="container x-auto w-4/5">
        <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-5">
          <div className="w-full flex flex-col justify-between">
            <div className="">
            <Header />
            <IncomeExpenses />
            <Balance />
            </div>
          <TransanctionForm />
          </div>
          <div className="flex flex-col">
          <ExpenseChart />
          <TransactionList />
          </div>
        </div>
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App