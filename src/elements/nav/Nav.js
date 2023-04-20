import { useState } from 'react';
import strzalka from '../multimedia/strzalka.png';
import { Link } from 'react-router-dom';

function Nav() {

  // const[visable , setVisable]=useState(false)
  const[visableZagraj , setVisableZagraj]=useState(false)
  const[visableSwiat , setVisableSwiat]=useState(false)
  const[visableMechanika , setVisableMechanika]=useState(false)



  const visableMenuHandler=(visable, setVisable)=>{
    setVisable(!visable)
  }
  
const data = [{
  name:'Zagraj',
  visableValue:visableZagraj,
  visableSetValue:setVisableZagraj,
  links:[
      {linkAdres:'Pliki',linkName:'Pliki'},
      {linkAdres:'Poradnik',linkName:'poradnik'},
      {linkAdres:'TworzeniePostaci',linkName:'tworzenie postaci'},
      {linkAdres:'Regulamin',linkName:'Regulamin'},
  
  ],},
  {
    name:'Świat',
    visableValue:visableSwiat,
    visableSetValue:setVisableSwiat,
    links:[
        {linkAdres:'Geografia',linkName:'Geografia'},
        {linkAdres:'OpisyNacji',linkName:'Opisy Nacji'},
        {linkAdres:'ETC',linkName:'E.T.C.'},    
    ],},
    {
      name:'Mechanika ',
      visableValue:visableMechanika,
      visableSetValue:setVisableMechanika,
      links:[
          {linkAdres:'wydobycie',linkName:'wydobycie'},
          {linkAdres:'rzemioslo ',linkName:'rzemiosło'},
          {linkAdres:'walka',linkName:'walka'},
          {linkAdres:'poczta',linkName:'poczta'},
          {linkAdres:'bank',linkName:'bank'},
          {linkAdres:'magazyn',linkName:'magazyn'},
      ],},
]
    return (
      <nav>
        <ul>
          <li><Link to={'/'}>News</Link></li>
          {data.map((data)=> (<li key={data.name}>
            <button className='visableSectionButton' onClick={()=>visableMenuHandler(data.visableValue, data.visableSetValue )}>
              <img className='arrow' style={data.visableValue?{transform:'rotate(0)'}:{ transform:'rotate(90deg)'}} alt='strzalka' src={strzalka}></img>
              {data.name}
            </button>
            <ul>
        {data.links.map(dataLinks=>(
          
          <li style={data.visableValue?{display:'none'}:null} key={dataLinks.linkName}><Link  to={`/${dataLinks.linkAdres}`}>{dataLinks.linkName}</Link></li>
        ))}
      </ul>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default Nav;