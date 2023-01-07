
export default function Header(props){
    const {countCartItems}=props;
    return (
    <div className="block row center">
        <div>
            <a href="#/">
            <h2>Angela's Shopping Cart</h2>
            </a>
        </div>
        <div>
            <a href="#/cart">Cart
            {countCartItems? (
            <button className="badge">{countCartItems}</button>):('')}
            </a>  <a href="#/singin">Sing In</a>
        </div>
    </div>
    );
}