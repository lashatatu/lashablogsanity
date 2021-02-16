const FilteringMenu =({onChange})=>{

  return(
     <div className={'filtering-menu mb-2'}>
       <div onClick={()=>{

         onChange();
       }}>
         change view
       </div>
     </div>
  )
}

export default FilteringMenu