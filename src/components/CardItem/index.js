// Write your code here.

import './index.css'

const CardItem = props => {
  const {cardList} = props
  const {title, description, imgUrl, className} = cardList
  return (
    <li className={`${className} card`}>
      <h1 className="head">{title}</h1>
      <p className="para">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="avatar" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
