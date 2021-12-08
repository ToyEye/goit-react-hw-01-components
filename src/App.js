import './App.css';
import Container from "./Components/Container/Container";
import user from "./user.json";
import Profile from "./Components/Profile/Profile";
import Statistics from "./Components/Statistics/Statistics";
import data from "./data.json";
import friends from "./friends.json";
import FriendList from "./Components/FriendList/FriendList";
import TransactionHistory from "./Components/TransactionHistory/TransactionHistory";
import transactions from "./transactions.json";

function App() {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </Container>
  );
};

export default App;
