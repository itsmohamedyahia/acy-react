export default function TableRow(props) {
    return (  <tr className="grid min-w-full grid-cols-3">
        {props.children}
    </tr>)
}