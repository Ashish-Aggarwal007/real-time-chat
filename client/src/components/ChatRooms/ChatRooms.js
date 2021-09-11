import React from 'react';


import './ChatRooms.css';

const ChatRooms = ({ users }) => (
  <div className="textContainer">
   
    {
      users
        ? (
          <div>
            <h1>People Online:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    {/* <img alt="Online Icon" src={onlineIcon}/> */}
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default ChatRooms;