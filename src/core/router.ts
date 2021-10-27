import { render } from "lit-html";
import routes from "../routes";


export const router = () => {
    const path = window.location.pathname;
    for (const route of routes) {
        if (route.url === path) {
            route.component();
        }
    }
};

export const renderPage = (page) => {
    render(page.default(), document.body);
}

export const routerListener = () => {
    render(router(), document.body);
}
