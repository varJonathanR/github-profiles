import { ChangeEvent } from "react";
import { SearchIcon } from "./Icons"
import { useGlobalContext } from "../context/UseProvider";
import { FetchAPI } from "../utils/FetchAPI";

export default function Search() {
    const { user, setUser, setIsLoading, setNotFound, setUserInfo, setUserRepos } = useGlobalContext();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setUser(e.target.value);
    };

    const searchUser = () => {
        FetchAPI(`https://api.github.com/users/${user}`, setUserInfo, setIsLoading, setNotFound);
        FetchAPI(`https://api.github.com/users/${user}/repos`, setUserRepos, setIsLoading, setNotFound);
    };

    return (
        <section className="w-full h-1/4 bg-img p-4">
            <section className="mx-auto flex items-center justify-center gap-2 w-1/2">
                <label className="flex items-center gap-4 bg-dark-gray p-2 rounded-md w-full">
                    <SearchIcon />
                    <input type="text" className="outline-none text-font-color" placeholder="Username" value={user} onChange={handleChange} />
                </label>
                <button className="bg-light-blue py-2 px-4 rounded-lg outline-none" onClick={searchUser}>Search</button>
            </section>
        </section>
    )
}
