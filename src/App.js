import './App.css';
import Counter from "./component/ReactProps-States/counter";
import Feedback from "./component/ReactProps-States/feedback";
import Anecdotes from "./component/ReactProps-States/anecdotes";
import Machine from "./component/ReactProps-States/machine";
import Course from "./component/ReactProps-States/course";
import Person from "./component/ReactProps-States/person";
import FormElement from "./component/FormsInReact/formEl";
import Pokedex from "./component/ReactProps-States/pokedex";
import RandomNum from "./component/ReactProps-States/randomNum";
import RollDice from "./component/ReactProps-States/rollDice";
import Fontawesomes from "./component/ReactProps-States/fontawesomes";
import Lotto from "./component/ReactProps-States/lotto";
import FlipCoin from "./component/ReactProps-States/flipCoin";
import Box from "./component/ReactProps-States/box";
import Form from "./component/FormsInReact/form";
import Item from "./component/FormsInReact/FormPractise/item";
import Boxx from "./component/FormsInReact/ColorBox/boxx";
import TodoList from "./component/FormsInReact/TodoApp/TodoList";
function App() {
    return (
        <>
            <Item/>
            <Boxx/>
            <TodoList/>
                {/*<Form/>*/}
            {/*<Box/>*/}
            {/*<FlipCoin/>*/}
            {/*<Counter step={3}></Counter>*/}
            {/*/!*<Feedback></Feedback>*!/*/}
            {/*<Anecdotes></Anecdotes>*/}
            {/*<RandomNum/>*/}
            {/*<RollDice/>*/}
            {/*<Lotto/>*/}
            {/*<h1>Slot Machine</h1>*/}
            {/*<Machine symOne={"X"} symTwo={"O"} symThree={"X"}/>*/}
            {/*<Machine symOne={"X"} symTwo={"X"} symThree={"X"}/>*/}
            {/*<Course></Course>*/}
            {/*/!*<Person/>*!/*/}
            {/*<FormElement/>*/}
            {/*<Fontawesomes/>*/}
            {/*<Pokedex/>*/}
        </>
    );
}

export default App;
