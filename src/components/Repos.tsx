import { useState } from "react";
import { useGlobalContext } from "../context/UseProvider"
import RepoTag from "./RepoTag"

export default function Repos() {
    const [showAll, setShowAll] = useState<boolean>(false);
    const { userRepos, notFound } = useGlobalContext();
    
    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayRepos = showAll ? userRepos : userRepos?.slice(0, 4);

    return (
        <section className="flex flex-col items-center justify-center">
            <section className="w-full mt-4 p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 px-4 lg:px-[100px]">
                { notFound === false && displayRepos?.map((repo: any) => (
                    <RepoTag key={repo.id} url={repo?.html_url} title={repo?.name} 
                    desc={repo?.description} license={repo?.license?.key}
                    forks={repo?.forks} stars={repo?.stargazers_count} updated_at={repo?.updated_at} />
                )) }
            </section>
            <button className="hover:bg-dark transition-all rounded-md py-2 px-4 text-font-color" onClick={handleShowAll}>{showAll ? "Show Less" : "Show All Reposirories"}</button>
        </section>
    )
}
