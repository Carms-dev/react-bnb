import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { index, selectFlat } = this.props;

    if (selectFlat) {
      selectFlat(index);
    }
  };

  render() {
    const { flat, selected } = this.props;

    return (
      <div
        className={`card ${selected ? 'active' : ''}`}
        style={{ backgroundImage: `url('${flat.imageUrl}')` }}
        onClick={this.handleClick}
      >
        <div className="card-price">{flat.price} {flat.priceCurrency}</div>
        <div className="card-description"><h2>{flat.name}</h2></div>
      </div>
    );
  }
}

export default Flat;
