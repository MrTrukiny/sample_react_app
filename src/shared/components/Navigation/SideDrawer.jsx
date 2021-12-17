import { createPortal } from 'react-dom';

import './SideDrawer.css';

const SideDrawer = (props) => {
  const content = <aside className="side-drawer">{props.children}</aside>;

  return createPortal(content, document.getElementById('side-drawer'));
};

export default SideDrawer;
