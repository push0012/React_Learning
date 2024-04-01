/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import MenuItem from "./menu-item";


function MenuList({list = []}){

    return (
        <ul className="menu-list-container">
            {
                list && list.length
                ? list.map((listItem)=> <MenuItem item={listItem}/>)
                : null
            } 

        </ul>
    )

}

export default MenuList;