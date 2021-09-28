import ReactDOM from "react-dom";
import user from ".";

const data = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const profile = (
  <div class="profile">
    <div class="description">
      <img src={data.avatar} alt={data.alt} class="avatar" />
      <p class="name">{data.name}</p>
      <p class="tag">{data.tag}</p>
      <p class="location">{data.location}</p>
    </div>

    <ul class="stats">
      <li>
        <span class="label">Followers </span>
        <span class="quantity">{data.stats.followers}</span>
      </li>
      <li>
        <span class="label">Views </span>
        <span class="quantity">{data.stats.views}</span>
      </li>
      <li>
        <span class="label">Likes </span>
        <span class="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>
);

ReactDOM.render(profile, document.querySelector("#root"));

console.log(profile);

// ////////////////////////////////////////
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
