import "./cart-footer.scss";
import priceFormatter from "../../utils/priceFormatter";


const CartFooter = ({total}) => {
    const {count, price} = total;
    return (
        <footer className="cart-footer">
            <div className="cart-footer__count">Quantity: {count}</div>
            <div className="cart-footer__price">Total: {priceFormatter(price)} usd</div>
        </footer>
    );
}
 
export default CartFooter;