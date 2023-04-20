import { useState } from "react";
import Article from "../Article";
import newsList from "./NewsList";

function News() {

  const [currentNewsListsNumber, setCurrentNewsListsNumber] = useState(1)
  const showPage = (i)=>{
    window.scrollTo(0, 0);
    setCurrentNewsListsNumber(i+1)
  }
  const createPageList = ()=>{
    let buttons=[]
    for(let i=0; i < newsList.length; i++){
      buttons.push(<li><button onClick={()=>showPage(i)}>{i+1}</button></li>  )
    }
    return buttons
  }
    return (
    <div>
      <ul className="NewsList">
        {newsList[currentNewsListsNumber - 1].map(data=>(<li key={data.id}><Article paragraf={data.paragrafs} img={data.img} /></li>))}
      </ul>
        <ul className="newsPageList">
          {
            createPageList()
          }
        </ul>
    </div>
    );
  }
  
  export default News;