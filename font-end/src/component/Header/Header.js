import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import * as Store from "../store";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileInvoiceDollar,faBasketShopping,faPersonWalkingDashedLineArrowRight,faSliders} from '@fortawesome/free-solid-svg-icons'
function Header(props) {
  const { dispatch } = useContext(Store.AppContext);
  const user = JSON.parse(localStorage.getItem("token"));
  const sigout = () => {
    dispatch({ type: "Current_User", payload: null });
    localStorage.clear();
  };
  return (
    <div>
      <div id="header">
        {" "}
        <Link to="/" id="logo">
          <img src="images/logo.gif" width={310} height={114} alt="" />
        </Link>
        <ul className="navigation">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/petmart">PetMart</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/petguide">PetGuide</Link>
          </li>
          <li>
            <Link to="/contacts">Contact us</Link>
          </li>
          {user ? (
            user.avt = user.avt.slice(12),
            <>
              <li className="avt-container">
                <span>Hello!</span>
                
                <Tippy
                  interactive
                  trigger="click"
                  placement="bottom-end"
                  render={(attrs)=>(
                    <div className="menu-poper" tabIndex="-1" {...attrs}>
                        <Link to ='#'>Setting <FontAwesomeIcon icon={faSliders}/></Link>
                        <Link to ='/bill'>Bill <FontAwesomeIcon icon={faFileInvoiceDollar} /></Link>
                        <Link to ='/cart'>Cart <FontAwesomeIcon icon ={faBasketShopping} /></Link>
                        <Link to ='/login' onClick={() => sigout()}>Exit <FontAwesomeIcon icon={faPersonWalkingDashedLineArrowRight}/></Link>
                      
                    </div>
                  )}
                >
                  <button>
                    <img src={"/images/avt/"+user.avt} alt="..." className="avt"></img>
                  </button>
                </Tippy>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Header;
