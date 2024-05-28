import './Card.css'

export default function Card(props) {
    const classes = 'card ' + props.className; //take the css class this item have and add the card css on top of it
    return <div className={classes}>{props.children}</div>
}