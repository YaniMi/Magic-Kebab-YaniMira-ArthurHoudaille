import "./assets/css/styles.css";
import "./assets/css/box.css";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Items from "./Items";
import Cart from "./components/Cart";
import {useState} from "react";

function App() {
    // Panier (basket)
    const [basket, setBasket] = useState([]);

    // Ajouter au panier
    const addItem = (kebab) => {
        // Vérifie si l'objet existe ou pas
        const exist = basket.find((item) => item.id === kebab.id);
        if (exist) {
            setBasket(basket.map(item => item.id === kebab.id ? {...exist, qty: exist.qty + 1} : item));
        } else {
            setBasket([...basket, {...kebab, qty: 1}]);
        }
    };

    // Supprimer du panier
    const removeItem = (kebab) => {
        // Vérifie si l'objet existe ou pas
        const exist = basket.find((item) => item.id === kebab.id);
        if (exist.qty === 1) {
            setBasket(basket.filter((item) => item.id !== kebab.id));
        } else {
            setBasket(basket.map(item => item.id === kebab.id ? {...exist, qty: exist.qty - 1} : item));
        }
    };

    return (
        <div className="App">
            <div>
                <Header name="Magic Kebab™" basket={basket.length}/>
                <Menu name="Kebabs" desc="Les meilleurs Kebabs du monde" menu={Items} addItem={addItem}/>
                <Cart items={basket} remove={removeItem}/>
            </div>
        </div>
    );
}

export default App;
