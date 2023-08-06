import {VictoryPie, VictoryLabel} from 'victory'
import { useGlobalState } from '../context/GlobalState'

function ExpenseChart() {

  const {transactions} = useGlobalState()

  /* const total = transactions.reduce((acc, item) => (acc += item.amout), 0) */

  const totalIncome = transactions.filter(t => t.amount > 0).reduce((acc, item) => (acc += item.amount), 0);

  const totalExpenses = transactions.filter(t => t.amount < 0).reduce((acc, item) => (acc += item.amount), 0) * -1;

const totalExpensesPercent = Math.round((totalExpenses / totalIncome) * 100)

const totalIncomePercent = 100 - totalExpensesPercent;



  return (
    <VictoryPie
    colorScale={['#186467', '#d73441']}
  data={[
    { x: "Expenses", y: totalExpensesPercent },
    { x: "Incomes", y: totalIncomePercent }
  ]}
  animate={{
    duration: 500
  }}
  labels={({datum}) => `${datum.y}%`}
  labelComponent={<VictoryLabel 
  angle={45}
  style={{
    fill: "white",
  }}
  />}
/>
  )
}

export default ExpenseChart