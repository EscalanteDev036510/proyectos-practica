import CardCOmponent from "../components/CardComponent";

const ProductContainer = () => {
    return (
      <div className="card">
        <div className="container">
            <div className="row">
                <CardCOmponent />
                <CardCOmponent />
                <CardCOmponent />
                <CardCOmponent />
                <CardCOmponent />
                <CardCOmponent />
            </div>
        </div>
      </div>
    )
}

export default ProductContainer;