import PersonName1 from "./PersonName1"

import Table1 from "./Table1"

const Person1 = ({data1,data2}) => {
 
      console.log("data1" , data1)
      console.log("data2" , data2)
      
    return (
        <div style = {{
            display : "flex",
            justifyContent : "space-around",
            marginBottom : "50px"
        }}>
             <PersonName1 data1 = {data1} data2={data2}/>
             <Table1 data1 = {data1} data2={data2}/> 
        </div>
    )

    }
    
    export default Person1