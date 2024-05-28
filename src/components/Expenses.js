import ExpenseItem from './ExpenseItem';


export default function Expenses(props) {

    return (
        <div>
            <h2>cars lists</h2>
            {props.items.map((item, index) => (
                <ExpenseItem
                    key={index}
                    title={item.title}
                    amount={item.amount}
                    date={item.date}
                />
            ))}
        </div>
    )
}