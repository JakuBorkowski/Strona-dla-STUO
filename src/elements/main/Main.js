import {  Routes, Route } from 'react-router-dom';
import News from './tabs/News';
import Regulamin from './tabs/zagraj/Regulamin';
import Error from './tabs/Error'
import Bank from './tabs/mechanika/Bank.js';
import Poczta from './tabs/mechanika/Poczta.js';
import Rzemioslo from './tabs/mechanika/Rzemioslo.js';
import Walka from './tabs/mechanika/Walka.js';
import Wydobycie from './tabs/mechanika/Wydobycie.js';
import ETC from './tabs/swiat/ETC.js';
import Geografia from './tabs/swiat/Geografia.js';
import OpisyNacji from './tabs/swiat/OpisyNacji.js';
import Pliki from './tabs/zagraj/Pliki.js';
import Poradnik from './tabs/zagraj/Poradnik.js';
import TworzeniePostaci from './tabs/zagraj/TworzeniePostaci.js';
import Magazyn from './tabs/mechanika/Magazyn.js';

function Main() {
    return (
      <main>
        <Routes>
            <Route path='/' element={<News/>} />
            <Route path='/Regulamin' element={<Regulamin/>} />
            <Route path='/Poczta' element={<Poczta/>}/>
            <Route path='/Rzemioslo' element={<Rzemioslo/>}/>
            <Route path='/Walka' element={<Walka/>}/>
            <Route path='/Wydobycie' element={<Wydobycie/>}/>
            <Route path='/ETC' element={<ETC/>}/>
            <Route path='/Geografia' element={<Geografia/>}/>
            <Route path='/OpisyNacji' element={<OpisyNacji/>}/>
            <Route path='/Pliki' element={<Pliki/>}/>
            <Route path='/Poradnik' element={<Poradnik/>}/>
            <Route path='/TworzeniePostaci' element={<TworzeniePostaci/>}/>
            <Route path='/Bank' element={<Bank/>}/>
            <Route path='/Magazyn' element={<Magazyn/>}/>

            <Route path='*' element={<Error/>} />
        </Routes>
        
      </main>
    );
  }
  
  export default Main;