import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { index, selectFlat } = this.props;
    selectFlat(index);
  }

  render() {
    const { name, imageUrl, price, priceCurrency } = this.props.flat;
    const { selected } = this.props;
    return (
      <div className={`card${ selected ? " active" : ""}`}
           style={{ backgroundImage: `url(${imageUrl})`}}
           onClick={this.handleClick} >
        <div className="card-price">{price} {priceCurrency}</div>
        <div className="card-description"><h2>{name}</h2></div>
      </div>
    );
  }
}

export default Flat;
