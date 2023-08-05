import { useGlobalState } from "../../context/GlobalState";


export function TrasnsactionItem({transaction}) {
    const {deleteTransaction} = useGlobalState()
  return (
    <li>
        <div>
            <p>{transaction.description}</p>
            <p>{transaction.amount}</p>
            <button onClick={() => {
                deleteTransaction(transaction.id);
            }}>
                x
            </button>
        </div>
    </li>
  )
}

