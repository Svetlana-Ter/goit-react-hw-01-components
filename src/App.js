import Profile from './components/profile/Profile';
import user from './components/profile/user.json';
import Statistics from './components/statistics/Statistics';
import statisticalData from './components/statistics/statistical-data.json';
import FriendsList from './components/friends/FriendsList';
import friends from './components/friends/friends.json';
import TransactionHistory from './components/transactions/TransactionHistory';
import transactions from './components/transactions/transactions.json';

function App() {
  return (    
    <div>
      <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats} />
    
      <Statistics title="Upload stats" stats={statisticalData} />

      <FriendsList friends={friends} />
      
      <TransactionHistory items={ transactions}/>
    </div>
  );
}

export default App;
