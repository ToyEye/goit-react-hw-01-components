import "./App.css";

import Container from "./Components/Container";
import Profile from "./Components/Profile";
import Statistics from "./Components/Statistics";
import FriendList from "./Components/FriendList";
import TransactionHistory from "./Components/TransactionHistory";

import data from "./data/data.json";
import friends from "./data/friends.json";
import user from "./data/user.json";
import transactions from "./data/transactions.json";

const App = () => {
  return (
    <Container>
      <>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
      </>
    </Container>
  );
};

export default App;
