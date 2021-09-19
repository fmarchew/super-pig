import data from "./data";

export default function handleClouds(ctx, canvas) {
    data.cloudsArray.forEach(el=>{
        el.update(canvas)
        el.draw(ctx)
    })
}
