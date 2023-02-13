import Child from './Child'
const Mother = () => {
   const kids= [
      { name: 'Ori', color: 'red' },
      { name: 'Ron', color: 'turquoise' },
      { name: 'Sigalit', color: 'green' },
      { name: 'Ruti', color: 'yellow' },
      { name: 'Alon', color: 'purple' },
      ]

       
  return (
    <div>
      <h1 className="mother">A Tale Of Five Ballons</h1>
      <div className="mother">{kids.map((child)=>{
          const color={
            backgroundColor: child.color
          };
            return(
               <>
               <Child name={child.name} style={color}/>
               </>
            );
         })}
         </div>
         
    </div>
  )
}

export default Mother

//^ <Child name={child.name} style={color}/>