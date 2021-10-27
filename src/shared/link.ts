import { html, render } from "lit-html"
import { router } from "../core/router";

export const Link = (route, content) => {
    const goTo = (route) => {
        return (ev) => {
            ev.preventDefault();
            const wH = window.history;
            wH.pushState({}, '', route);
            render(router(), document.body);
        }

    }
    return html`
        <a href="#" @click=${goTo(route)}>${content}</a>
    `
}