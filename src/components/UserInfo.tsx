import { useGlobalContext } from "../context/UseProvider";
import UserInfoTag from "./UserInfoTag";

export default function UserInfo() {
    const { userInfo } = useGlobalContext();

    return (
        <section className="flex items-center px-4 lg:px-[100px] lg:items-start lg:flex-row flex-col text-font-color">
            <div className="flex flex-col items-center lg:items-start">
                <div className="h-[100px] w-[150px] relative">
                    <div className="w-[150px] h-[150px] absolute p-3 top-[-50px] bg-dark-gray rounded-lg">
                        <img src={userInfo?.avatar_url} alt="" className="w-full h-full object-cover rounded-md" />
                    </div>
                </div>
                <h1 className="text-2xl font-bold mt-2">{userInfo?.name}</h1>
                <p className="text-center lg:text-left lg:max-w-[40ch]">{userInfo?.bio}</p>
            </div>
            <div className="flex gap-3 items-center justify-center flex-wrap mt-4">
                <UserInfoTag type="Followers" info={userInfo?.followers} />
                <UserInfoTag type="Following" info={userInfo?.following} />
                <UserInfoTag type="Location" info={userInfo?.location} />
            </div>
        </section>
    )
}
