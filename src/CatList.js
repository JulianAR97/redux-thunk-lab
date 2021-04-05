// write your CatList component here
import React from 'react';

const CatList = (props) => {
  return (
    <div>
      {props.catPics.map(pic => <img src={pic.url} key={pic.id} alt="pic of cat" height="200px" width="200px"></img>)}
    </div>
  )
}

export default CatList