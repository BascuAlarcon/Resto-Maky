import React, { MouseEventHandler, useState } from 'react' 


export const Menu = () => {
  const buttonsMenu = ['Hand Rolls', 'Promo Hand Rolls', 'Gohan', 'Makys', 'Rolls sin Arroz', 'Premium', 'Promos',
   'Veganos', 'Vegetarianos', 'Ceviches', 'Momentos especiales', 'Gyozas', 'Palitos', 'Colaciones', 'Otros', 'Extras', 'Adicionales', 'Bebestibles']
   
  let listMenuHandRolls = {
    'Hand Rolls': ['Kanikana - Queso Crema - Palta......................................................................................................................................................$4.190'],
    'Hand Rolls C': ['Pollo - Queso Crema - Cebollin........................................................................................................................................................$4.190'],
    'Hand Rolls D': ['Camarón - Queso Crema - Palta.......................................................................................................................................................$4.190'],
    'Hand Rolls E': ['Pollo - Queso Crema - Palta................................................................................................................................................................$4.190'],
    'Hand Rolls F': ['Champiñón - Pollo - Queso Crema....................................................................................................................................................$4.190'],
  } 
  
  let listMenuMakys = {
    'Maky 1': ['5 Tempura A - 5 Ciboulette - 5 Sésamo - 5 Nori......................................................................................................................................................$4.190'],
    'Maky 2': ['10 Tempura C - 5 Ciboulette - 5 Sésamo - 5 Nori........................................................................................................................................................$4.190'],
    'Maky 3': ['10 Tempura A - 10 Nori - 5 Sésamo - 5 Nori.......................................................................................................................................................$4.190'],
    'Maky 4': ['10 Tempura A - 10 Tempura B - 10 Nori  - 5 Sésamo - 5 Ciboulette................................................................................................................................................................$4.190'],
    'Maky 5': ['10 Tempura A - 10 Tempura B - 10 Queso Crema - 10 Nori - 5 Sésamo - 5 Ciboulette....................................................................................................................................................$4.190'],
  } 
  
  let keysMenu = Object.keys(listMenuHandRolls)  

  const [listMenu, setListMenu] = useState({})  

  let changeMenu = (button: string) => {
    console.log(button)
    if(button === 'Hand Rolls'){ 
      setListMenu(listMenuHandRolls) 
    } 
    if(button === 'Makys'){
      setListMenu(listMenuMakys) 
    }

    keysMenu = Object.keys(listMenu)
    console.log(keysMenu)
    console.log(listMenu)
    return (event: React.MouseEvent) => {}
  } 

  return  <> 
    <div className="row"> 
      <div className="col-2 bg-white d-flex flex-column justify-content-center align-items-center"> 
        {
          buttonsMenu.map(button => (
            <button key={button} className="btn btn-dark m-2" onClick={function() {changeMenu(button)}}>{button}</button> 
          ))
        } 
      </div>
      <div className="col-10 bg-dark text-white text-left text-start justify-content-start align-items-start">
        { 
          keysMenu.map(menus => (
            <div key={menus}> 
              <h4 className='m-0 p-0 pt-2'>{menus}</h4>
              <h5>{listMenu[menus as keyof typeof listMenu]}</h5>
             </div>
          ))
        }
      </div>
    </div>  
  </>
}
