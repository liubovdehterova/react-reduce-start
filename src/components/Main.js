import {useDispatch, useSelector} from "react-redux";
import {changeValue} from "../redux/main.action";

const Main = () => {
    const dispatch = useDispatch();
    const testValue = useSelector(state => state.mainReducer.mainState)

    const handleChange = (e) => {
        dispatch(changeValue(e.target.value))
    }
    const add = e => {
        e.preventDefault();
        let elemText = document.querySelector('#text');
        if (testValue) {
            let addText = elemText.appendChild(document.createElement('p'));
            addText.append(testValue)
        }
    }
    return (
        <div>
            <h1>Redux</h1>
            <textarea onChange={handleChange} placeholder="enter text" value={testValue} type="text"/>
            <div id="text"></div>
            <button onClick={add} type='button'>Оновити</button>

        </div>
    );
}

export default Main;