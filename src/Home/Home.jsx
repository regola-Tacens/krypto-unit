import CurrenciesList from './CurrenciesList';
import HomeTitle from './HomeTitle';
import './index.scss';
import UserLevel from './UserLevel';

function Home() {
  
  return (
    <div className="home">
      <HomeTitle />
      <UserLevel />
      <CurrenciesList />
    </div>
  );
}

export default Home;
