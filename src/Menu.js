import React, { useState } from 'react';
import './App.css';
import menu from './Data';

export default function Menu() {
    const [filter, setFilter] = useState("All");
    const [hoveredItem, setHoveredItem] = useState(null);

    const handelcard = (type) => {
        setFilter(type);
    };

    const handleMouseEnter = (menuItem) => {
        setHoveredItem(menuItem);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    const filteredMenu = menu.filter(item => filter === "All" || item.category === filter);

    return (
        <div className='cards'>
            <div className='upper'>
                <h1>Our Menu</h1>
                <div className='btns'>
                    <button onClick={() => handelcard("All")}>All</button>
                    <button onClick={() => handelcard("breakfast")}>Breakfast</button>
                    <button onClick={() => handelcard("lunch")}>Lunch</button>
                    <button onClick={() => handelcard("shakes")}>Shakes</button>
                </div>
            </div>
            <div className='cardx'>
                {filteredMenu.map((menuItem) => (
                    <div
                        key={menuItem.id}
                        className='card'
                        onMouseEnter={() => handleMouseEnter(menuItem)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className='cimg'>
                            <img src={menuItem.img} alt={menuItem.title} />
                        </div>
                        <h2>{menuItem.title}</h2>
                        <div className="hover-content">
                            <p>Price: ${menuItem.price}</p>
                            <p>{menuItem.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
