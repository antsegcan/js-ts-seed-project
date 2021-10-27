import { render } from "lit-html";
import { router, routerListener } from "./core/router";

function onLoad() {
    render(router(), document.body);
}

document.addEventListener('DOMContentLoaded', onLoad);

window.addEventListener('popstate', routerListener);
