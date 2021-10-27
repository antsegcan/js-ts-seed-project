import { html } from "lit-html";
import { Link } from "../../shared/link";

const HomePage = () => {
    return html`
    ${Link('/about', 'Go to about page')}
    `;
}

export default HomePage;