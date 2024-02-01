import { useEffect, useState } from 'react'
import './App.css'
import Search from './components/Search'
import UserInfo from './components/UserInfo';
import Repos from './components/Repos';
import { GlobalContext } from './context/UseProvider';
import { FetchAPI } from './utils/FetchAPI';
import Loader from './components/Loader';
import NotFound from './components/NotFound';
import Footer from './components/Footer';

export default function App() {
  const [user, setUser] = useState<string>("GitHub");
  const [userInfo, setUserInfo] = useState(null);
  const [userRepos, setUserRepos] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [notFound, setNotFound] = useState<boolean>(false);

  useEffect(() => {
    FetchAPI(`https://api.github.com/users/${user}`, setUserInfo, setIsLoading, setNotFound);
    FetchAPI(`https://api.github.com/users/${user}/repos`, setUserRepos, setIsLoading, setNotFound);
  }, []);
  return (
    <GlobalContext.Provider value={{
      user, setUser, isLoading, setIsLoading, notFound, setNotFound, userInfo, setUserInfo, userRepos, setUserRepos
    }}>
      <Search />
      { !isLoading && notFound === false
        ? <>
          <UserInfo />
          <Repos />
        </> 
        : isLoading && notFound === false ? <Loader /> : <NotFound /> }
      <Footer />
    </GlobalContext.Provider>
  )
}
