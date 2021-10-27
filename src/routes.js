import { renderPage } from "./core/router";

const routes = [
    {
        url: '/',
        component: () => {
            import("./pages/home/home").then(renderPage)
        },
        data: ['example']
    }, {
        url: '/about',
        component: () => {
            import("./pages/about/about").then(renderPage)
        }
    }, {
        url: '**',
        component: () => {
            import("./pages/error/error").then(renderPage)
        }
    }
];

export default routes;