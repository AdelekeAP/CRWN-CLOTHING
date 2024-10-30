import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
// import './checkout-item.styles.scss';
import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Value, Arrow, RemoveButton  } from './checkout-item.styles';


const CheckoutItem = ({cartItem}) => {
    const { clearItemFromCart, addItemToCart, removeItemToCart } = useContext(CartContext);

    const { name , imageUrl, price , quantity} = cartItem;

    const clearItemHandler = () => clearItemFromCart(cartItem);
    const addItemHanlder = () => addItemToCart(cartItem);
    const removeItemHandler = () => removeItemToCart(cartItem)

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src ={imageUrl} alt = {`${name}`}/>
            </ImageContainer>
            <BaseSpan> {name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>
                    &#10094;
                </Arrow>
                <Value> {quantity} </Value>
                <Arrow onClick={addItemHanlder}>
                    &#10095;
                </Arrow>
            
            </Quantity>
            <BaseSpan>{price}</BaseSpan>
            <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    );
};

export default CheckoutItem;

