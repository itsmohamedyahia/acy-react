export default function H3({children , className=""}) {
    return (<h3 className={ 
        ["text-2xl font-bold tracking-tighter text-gray-900", className].join(" ")}>
            {children}</h3>)
}