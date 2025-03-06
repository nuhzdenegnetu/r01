import React, { useState } from "react";
import Button from "./Button.jsx"
import Input from "./Input.jsx"

const App = () => {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleClick = () => {
        alert(`Вы ввели: ${inputValue}`);
    }

    return (
        <div className="App">
            <Input
                type="text"
                placeholder="Введите текст"
                onChange={handleInputChange}
            />
            <Button text="Показать текст" type="text" onClick={handleClick} />
            <p>Вы ввели: {inputValue}</p>
        </div>
    )
}

export default App;