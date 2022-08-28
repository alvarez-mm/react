import "./stylesItemListContainer.css"

const ItemListContainer = ({greeting}) => {
    return (
        <div className="saludo">
            <p>{greeting}</p>
        </div>
    );
};

export default ItemListContainer;