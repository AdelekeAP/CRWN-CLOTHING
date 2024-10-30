import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as CrwnLogo } from '../../assests/crown.svg';
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

//import './navigation.styles.scss';
import userEvent from "@testing-library/user-event";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";

const Navigation = () => {

  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const signOutHandler = async () => {
    await signOutUser();
  }

  console.log(currentUser)
    return(
      <Fragment>
        <NavigationContainer> 
            <LogoContainer to='/'>
              <CrwnLogo className="logo"/> 
            </LogoContainer>  
          <NavLinks> 
            <NavLink to='/shop'>
                SHOP
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={signOutHandler}> SIGN OUT </NavLink> )
                :(
                <NavLink to='/auth'>
                  SIGN IN
                </NavLink>
              )}
              <CartIcon/>
          </NavLinks>   
          {isCartOpen && <CartDropdown/> }
        </NavigationContainer>
        <Outlet />
      </Fragment>
    );
  };

  export default Navigation;