import A from '../multimedia/alfabet/A.png'
import B from '../multimedia/alfabet/B.png'
import C from '../multimedia/alfabet/C.png'
import D from '../multimedia/alfabet/D.png'
import E from '../multimedia/alfabet/E.png'
import F from '../multimedia/alfabet/F.png'
import G from '../multimedia/alfabet/G.png'
import H from '../multimedia/alfabet/H.png'
import I from '../multimedia/alfabet/I.png'
import J from '../multimedia/alfabet/J.png'
import K from '../multimedia/alfabet/K.png'
import L from '../multimedia/alfabet/L.png'
import M from '../multimedia/alfabet/M.png'
import N from '../multimedia/alfabet/N.png'
import O from '../multimedia/alfabet/O.png'
import P from '../multimedia/alfabet/P.png'
import R from '../multimedia/alfabet/R.png'
import S from '../multimedia/alfabet/S.png'
import T from '../multimedia/alfabet/T.png'
import U from '../multimedia/alfabet/U.png'
import W from '../multimedia/alfabet/W.png'
import Z from '../multimedia/alfabet/Z.png'

function Article(props) {
  const firstParagraf = props.paragraf[0];
  const residualParagraf = props.paragraf.slice(1, props.paragraf.length - 1)
  const ornamentLetter = () => {
    const firstLetter = firstParagraf.slice(0, 1).toUpperCase()
    const letterObject = { 
      A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, R, S, T, U, W, Z
    };
    return letterObject[firstLetter] ? <img src={letterObject[firstLetter]} alt='ornament letter' /> : <div className='firstLetter'>{firstLetter}</div>;
  }

  return (
    <article className='mainArticle'>
      {ornamentLetter()}
      <p>{firstParagraf.slice(1, firstParagraf.length - 1)}</p>
      {residualParagraf.map(data => (
        <p>{data}</p>
      ))}
      {props.img}
    </article>
  )
}

export default Article