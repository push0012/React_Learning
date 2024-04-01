/* eslint-disable react/prop-types */
import MenuList from "./menu-list";
import './styles.css';

function TreeView({menus = []}){

return <div className="tree-view-container">

    <MenuList list={menus}/>
</div>
}

export default TreeView;