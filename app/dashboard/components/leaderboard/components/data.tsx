const fontMd = " font-medium"
const classes = "w-full px-6 py-4 text-center text-gray-800 whitespace-nowrap text-md dark:text-gray-200"

export default function TableData(props) {
    return ( <td className={props.fontMd ? classes + fontMd : classes } >
   {props.props}
  </td>)
}