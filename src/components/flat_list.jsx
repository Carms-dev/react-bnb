import React from 'react';

import Flat from './flat';

const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    <div className="flat-list">
      {flats.map((flat, index) =>
        <Flat
        flat={flat}
        index={index}
        key={flat.imageUrl}
        selectFlat={selectFlat}
        selected={flat === selectedFlat}
        />)
      }
    </div>
  );
};

// class FlatList extends Component {
//   render() {
//     return (
//       <div className="flat-list">
//         {this.props.flats.map(flat => <Flat flat={flat}/>)}
//       </div>
//     );
//   }
// }

export default FlatList;
