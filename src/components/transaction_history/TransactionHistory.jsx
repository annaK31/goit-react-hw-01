
import css from './TransactionHistory.module.css'

const TransactionHistory = ({items})=> {
    return(
        <table className={css.trsn_table}>
              <thead className={css.trsn_thread}>
                      <tr>
                        <th className={css.trsn_table_head}>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                     </tr>
            </thead>
            <tbody>
                   {items.map((transactions) =>{
                    return(
                          <tr className={css.trsn_item} key={transactions.id}>
                             <td className={css.trsn_info}>{transactions.type}</td>
                             <td  className={css.trsn_info}>{transactions.amount}</td>
                             <td  className={css.trsn_info}>{transactions.currency}</td>
                         </tr>)
           })
        }
            </tbody>
       </table>
    )
}

export default TransactionHistory;