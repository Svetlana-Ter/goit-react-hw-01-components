import Profile from './components/Profile/Profile';
import user from './components/Profile/user.json';
import Statistics from './components/Statistics/Statistics';
import statisticalData from './components/Statistics/statistical-data.json';
import FriendsList from './components/Friends/FriendsList';
import friends from './components/Friends/friends.json';
import TransactionHistory from './components/Transactions/TransactionHistory';
import transactions from './components/Transactions/transactions.json';

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
