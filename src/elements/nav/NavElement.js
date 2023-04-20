import { Link } from 'react-router-dom';


function NavElement(props) {

    return (
      <ul>
        {console.log(props.links[0])}
        {props.map(data=>(
          <li key={props.links.linkName}><Link  to={`/${props.links.linkAdres}`}>{props.links.linkName}</Link></li>
        ))}
      </ul>
    );
  }
  
  export default NavElement;