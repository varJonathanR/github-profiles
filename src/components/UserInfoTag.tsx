interface Props {
    type: string
    info: string | number | undefined
}

export default function UserInfoTag({ type, info }: Props) {
    return (
        <p className="text-gray font-bold py-2 px-4 bg-dark rounded-lg">{type} | <span className="text-font-color">{info === null ? "Not Found" : info}</span></p>
    )
}
