import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons'
import SingleItem from './SingleItem'
import { Link, useLocation} from 'react-router-dom'

const ItemList = ({ title, items, itemsArray, path, idPath }) => {

  const {pathname} = useLocation();
  const finalItens = pathname === '/' ? items : Infinity;

  return (

    <div className='item-list'>
      <div className='item-list__header'>
        <h2>{title} populares</h2>
        { pathname === '/' || pathname === undefined  ?
          <Link className='item-list__link' to={path}>Mostrar tudo</Link>
        :
          <></>
      }
        </div>
      <div className='item-list__container'>
        {itemsArray
          .filter((currentValue, index) => index < finalItens)
          .map((currentObj, index) => (
            <SingleItem {...currentObj} key={`${title}-${index}`} idPath={idPath} />
          ))}
      </div>
    </div>
  );
};



export default ItemList
