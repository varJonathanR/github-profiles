import { DateConverter } from "../utils/DateConverter"
import { Forks, Shield, Star } from "./Icons"

interface Props {
    url: string | undefined
    title: string | undefined
    desc: string | null | undefined
    license: string | null | undefined
    forks: number | undefined | null
    stars: number | undefined | null
    updated_at: string | null
}

export default function RepoTag({ url, title, desc, license, forks, stars, updated_at }: Props) {
    return (
        <a href={url} target="_blank" rel="noopener noreferrer">
            <article className="text-font-color min-h-[125px] p-3 rounded-xl bg-gradient-to-t from-dark to-purple">
                <h1 className="text-xl">{title}</h1>
                <p className="text-md">{desc}</p>
                <div className="flex gap-2 items-center mt-4">
                    { license === null ? "" : <p className="flex gap-1 items-center"><Shield/> {license?.toUpperCase()}</p> }
                    <p className="flex gap-1 items-center"><Forks/> {forks}</p>
                    <p className="flex gap-1 items-center"><Star /> {stars}</p>
                    { updated_at ? <p>{DateConverter(updated_at)}</p> : "" }
                </div>
            </article>
        </a>
    )
}
