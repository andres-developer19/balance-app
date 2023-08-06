import { useGlobalState } from "../context/GlobalState"



function IncomeExpenses() {

    const {transactions} = useGlobalState()
    const amounts = transactions.map((t) => t.amount    )

    const income = amounts
                    .filter(item => item > 0)
                    .reduce((acc, item) => (acc += item), 0)

    const expenses = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item), 0) * -1

    return (
    <>    
        <div className="flex justify-between my-2">
        <h4>Income</h4>
        <h4>{income}</h4>
        </div>
        <div className="flex justify-between my-2">
        <h4>Expense</h4>
        <h4>{expenses}</h4>
        </div>
    </>
  )
}

export default IncomeExpenses