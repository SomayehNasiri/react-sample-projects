import React,{Component} from "react";

const Fruit=({name}) => <div className="fruit">{name}</div>

class FruitBasket extends Component {
state={
    fruits: ["Apples","Kiwi","MAngo","Melon","Avocado"]
};
render (){
    return <div className="app" > 
    {this.state.fruits.map(f=>(<Fruit name={f}/>))}
    </div>;
}

}
export default FruitBasket;