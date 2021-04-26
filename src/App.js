import React from "react";
import PropTypes from "prop-types";

// API를 통해서 데이터를 받아왔다고 가정!!
const twice = [
  {
    id : 1,
    name : "mina",
    image : "https://i.ytimg.com/vi/pZszcCdHukk/maxresdefault.jpg",
    rating : 4.8
  },
  {
    id : 2,
    name : "sana",
    image : "http://img.hani.co.kr/imgdb/resize/2019/0502/00503582_20190502.JPG",
    rating : 4.2
  },
  {
    id : 3,
    name : "chaeyoung",
    image : "https://upload.wikimedia.org/wikipedia/commons/3/3a/171109_%EC%97%A0%EC%B9%B4%EB%AF%B8%EB%8B%88%ED%8C%AC%EB%AF%B8%ED%8C%85_%ED%8A%B8%EC%99%80%EC%9D%B4%EC%8A%A4_%EC%B1%84%EC%98%81_%283%29.jpg",
    rating : 4.5
  },
  {
    id : 4,
    name : "nayeon",
    image : "https://i.pinimg.com/originals/28/37/5f/28375f1b51f3f4c40c6da45ff4ef2f0a.jpg",
    rating : 5
  },
  {
    id : 5,
    name : "jihyo",
    image : "https://cdnweb01.wikitree.co.kr/webdata/editor/202012/11/img_20201211173048_68f2a88c.webp",
    rating : 4
  }
];

function Twice({name, image, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h4>{rating}/5.0</h4>
      <img src={image} alt={name}/>
    </div>
  );
}

Twice.propTypes = {
  name : PropTypes.string.isRequired,
  image : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      <h1>Hello</h1>
      {twice.map(member => 
        <Twice key={member.id} name={member.name} image={member.image} rating={member.rating} />
      )}
    </div>
  );
}

export default App;
