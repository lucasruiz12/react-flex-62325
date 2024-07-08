import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({productos}) => {
    return (
        <div className="item-list">
            {
                productos.map((el, index) => {
                    return (
                        <Item key={index} index={index} nombre={el.nombre} precio={el.precio} />
                    )
                })
            }
        </div>
    );
};

export default ItemList;