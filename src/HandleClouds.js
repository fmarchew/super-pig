import data from "./data";

export default function handleClouds(ctx) {
    for (let i = 0; i < data.cloudsArray.length; i++) {
        data.cloudsArray[i].update();
        data.cloudsArray[i].draw(ctx);
    }
}