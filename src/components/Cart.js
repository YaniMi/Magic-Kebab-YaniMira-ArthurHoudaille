import '../assets/css/panier.css';

function Cart({items, remove}) {
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "100%";
        document.getElementById("mySidenav").style.height = "0";
    };

    // Calcule le prix total
    const totalPrice = items.reduce((accumulator, currentValue) => accumulator + currentValue.qty * currentValue.price, 0);
    const TVA = totalPrice * 0.1;

    return (
        <div id="mySidenav" className="sidenav">
            <a href="#" className="closebtn" onClick={closeNav}>&times;</a>
            <div className="container" id="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Panier</h3>
                        <hr/>
                        <div className="table-responsive" id="table">
                            <table className="table">
                                <thead id="table-header">
                                <tr>
                                    <th>Objet</th>
                                    <th>Quantité</th>
                                    <th>Prix</th>
                                    <th>Supprimer</th>
                                </tr>
                                </thead>
                                <tbody id="table-body">
                                {items.map((kebab) => (
                                    <tr key={kebab.id}>
                                        <td><strong>{kebab.name}</strong></td>
                                        <td>{kebab.qty}</td>
                                        <td>€{kebab.price}</td>
                                        <td id="remove">
                                            <i onClick={() => remove(kebab)} className="far fa-trash-alt"/>
                                        </td>
                                    </tr>
                                ))}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h3>Paiement</h3>
                        <hr/>
                        <div className="d-flex justify-content-between">
                            <p className="lead">Sous-total</p>
                            <p className="lead">€{totalPrice}</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <p>Taxes (TVA)</p>
                            <p>€{TVA}</p>
                        </div>
                        <hr/>
                        <button className="btn btn-success d-flex justify-content-between align-items-baseline"
                                id="checkout" type="button">Paiement<span
                            className="badge bg-success">€{totalPrice + TVA}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
