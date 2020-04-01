import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectedFlat, selectFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) => <Flat
        flat={flat}
        index={index}
        key={flat.imageUrl}
        selected={flat === selectedFlat}
        selectFlat={selectFlat} />)};
    </div>
  );
};

export default FlatList;
