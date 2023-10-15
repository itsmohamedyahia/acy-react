import TableData from "./Table__Data";
import TableRow from "./Table__Row";

export default function TableBody() {
    return ( <tbody className="block min-w-full divide-y divide-gray-200 dark:divide-gray-700">
   <TableRow>
    <TableData props={1} fontMd></TableData>
    <TableData props="John Brown" fontMd ></TableData>
    <TableData props={45}  ></TableData>  
     
   </TableRow>
   <TableRow>
    <TableData props={2} fontMd></TableData>
    <TableData props="Jim Green" fontMd ></TableData>
    <TableData props={27}  ></TableData>  
   </TableRow>

   <TableRow>
    <TableData props={3} fontMd></TableData>
    <TableData props="Joe Black" fontMd ></TableData>
    <TableData props={31}  ></TableData>    
   </TableRow>

   <TableRow>
    <TableData props={3} fontMd></TableData>
    <TableData props="Joe Black" fontMd ></TableData>
    <TableData props={31}  ></TableData>      
   </TableRow>
   
   <TableRow>
    <TableData props={3} fontMd></TableData>
    <TableData props="Joe Black" fontMd ></TableData>
    <TableData props={31}  ></TableData>    
   </TableRow>
  </tbody>)
}