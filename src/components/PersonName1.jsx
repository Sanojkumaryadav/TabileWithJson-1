const PersonName1 = ({data1,data2}) => {

    console.log("personName1" , data1)
    return (
        <div style = {{
            width : "25%",
            display: "flex",
            flexDirection : "row-reverse",

            }}> 
          <div style = {{
               width : "200px",
               textAlign: "center",
               paddingTop : "25%"
              
          }}> {   


            data1[0].Name

           
          }
          </div>
        </div>
      )
}

export default PersonName1