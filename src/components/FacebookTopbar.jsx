import React from 'react';
import './FacebookTopbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAngleDown, faCaretDown, faQuestionCircle, faUserFriends, faCommentDots, faBell } from '@fortawesome/free-solid-svg-icons'

export default () => <div className="topbar">
  <div className="left">
    <img alt="e" className="logo" src="http://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19753.png"/>
    <input placeholder="Buscar" className="search-box"></input>
  </div>
  <div className="right">
    <div className="topbar-text right-bordered">
      Melo
    </div>
    <div className="topbar-text right-bordered">
      Inicio
    </div>
    <div className="topbar-text right-bordered">
      Crear
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faUserFriends} size="xs"/>
    </div>
    <div className="icon right-bordered">
    < FontAwesomeIcon icon={faCommentDots} size="xs" />
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faBell} size="xs"  />
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faQuestionCircle} size="xs"  />
    </div>
    <div className="icon">
      <FontAwesomeIcon icon={faCaretDown} size="xs" />
    </div>
  </div>
</div>