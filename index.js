// Write your code here.
import './index.css'

const Cards = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={className}>
      <div className="list-elements">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default Cards
