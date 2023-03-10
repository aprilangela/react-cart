export default function Product(props){
    const {product, onAdd, onRemove} = props;
    return (
        <div className ="card">
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>${product.price}</div>
            <div>
                <button onClick={()=>onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    )
}