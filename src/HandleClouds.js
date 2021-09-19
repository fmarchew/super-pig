import data from "./data";

export default function handleClouds(ctx, canvas) {
    for (let i = 0; i < data.cloudsArray.length; i++) {
        data.cloudsArray[i].update(canvas);
        data.cloudsArray[i].draw(ctx);
    }
}