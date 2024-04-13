import React from 'react';
import './list.css';
import UserInfo from './userInfo/UserInfo';
import ChatList from './chatList/ChatList';
import { auth } from '../../lib/firebase';

const List = () => {
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <div className="list">
      <UserInfo />
      <ChatList />
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default List;
