import './App.css'
import Profile from './components/profile/Profile.jsx'
import userData from "./userData.json"
import friends from "./friends.json"
import FriendList from './components/friend_list/FriendList.jsx'
import TransactionHistory from './components/transaction_history/TransactionHistory.jsx'
import transactions from "./transactions.json"


 const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
