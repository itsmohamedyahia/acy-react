export default function H3({text , className=""}) {
    return (<h3 className={ 
        ["text-2xl font-bold tracking-tighter text-gray-900", className].join(" ")}>
            {text}</h3>)
}