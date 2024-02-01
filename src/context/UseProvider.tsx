import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface GlobalContextTypes {
    user: string
    isLoading: boolean
    notFound: boolean
    userInfo: any
    userRepos: any
    setUser: Dispatch<SetStateAction<string>>
    setIsLoading: Dispatch<SetStateAction<boolean>>
    setNotFound: Dispatch<SetStateAction<boolean>>
    setUserInfo: Dispatch<SetStateAction<any>>
    setUserRepos: Dispatch<SetStateAction<any>>
}

export const GlobalContext = createContext<GlobalContextTypes>({
    user: "",
    isLoading: false,
    notFound: false,
    userInfo: null,
    userRepos: null,
    setUser: () => {},
    setIsLoading: () => {},
    setNotFound: () => {},
    setUserInfo: () => null,
    setUserRepos: () => null
});

export const useGlobalContext = () => useContext(GlobalContext);
