import data from "./data";
import Clouds from "./Clouds";

export default function initClouds(canvas) {
    setInterval(() => {
        for (let i = 0; i < Math.floor(Math.random() * (4 - 1)) + 1; i++) {
            data.cloudsArray.push(new Clouds(canvas));
        }
    }, 4000)

}