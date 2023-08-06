import { useGlobalState } from "../../context/GlobalState";


export function TransactionItem({transaction}) {
    const {deleteTransaction} = useGlobalState()
  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between items-center">
        <div>
            <p className="text-sm">{transaction.description}</p>
            <p>$ {transaction.amount}</p>
            <button onClick={() => {
                deleteTransaction(transaction.id);
            }}>
                x
            </button>
        </div>
    </li>
  )
}

