import React from 'react';
import ReactDOM from 'react-dom/client';
import { Profile } from 'Profile';
import './index.css';
import user from './user.json';
import data from './data.json';
import { Statistics } from 'Statistics';
import { FriendList } from 'FriendList/FriendList';
import friends from './friends.json';
import { TransactionHistory } from 'TransactionHistory/TransactionHistory';
import transactions from './transactions.json';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={data} />
    <Statistics stats={data} />
    <FriendList friends={friends}></FriendList>
    <TransactionHistory transaction={transactions}></TransactionHistory>
  </React.StrictMode>
);
