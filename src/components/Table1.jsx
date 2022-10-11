import React from "react"
import TableList1 from "./TableList1"
import TableList2 from "./TableList2"


const Table1 = ({data1,data2}) => {

    console.log("Table1" , data1)

    return (
          <div style = {{
              width : "60%",
              marginRight : "10%"
          }}>
             <TableList1 data1 = {data1} data={data2}/> 
             {/* <TableList2 data1 = {data1} data={data2}/>  */}
          </div>
    )
}

export default Table1