import { useState } from "react";


const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [lights, setLights] = useState(['red', 'yellow', 'green']);

   
    const changeColor = () => {
        const currentIndex = lights.indexOf(color);
        const nextIndex = (currentIndex + 1) % lights.length;
        setColor(lights[nextIndex]);
    };

   
    const addPurpleLight = () => {
        if (!lights.includes("purple")) {
            setLights([...lights, "purple"]);
        }
    };

    return (
        <div>
            <div className="traffic-light-container">
            <div className="traffic-light">
                {lights.map((light) => (
                    <div
                        key={light}
                        className={`light ${light} ${color === light ? "active" : ""}`}
                        onClick={() => setColor(light)}
                    />
                ))}
            </div>
            </div>
            <button onClick={changeColor}>Alternar Color</button>
            <button onClick={addPurpleLight}>Añadir Luz Púrpura</button>
        </div>
    );
};

export default TrafficLight;