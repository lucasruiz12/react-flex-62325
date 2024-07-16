import React from 'react';
import Item from './Item';
import './ItemList.css';

const ItemList = ({productos}) => {
    return (
        <div className="item-list">
            {
                productos.map((el) => {
                    return (
                        <Item key={el.id} id={el.id} nombre={el.nombre} precio={el.precio} />
                    )
                })
                // renderProducts()
            }
        </div>
    );
};

export default ItemList;