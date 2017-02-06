
export class Breadcrumbs {
    constructor() {
        this.registry = {
            "title": "Breadcrumbs",
            "samples": {
                "basic-use": {
                    "route": "about",
                    "files": ["html", "md"]
                },
                "second-target": {
                    "route": "login",
                    "files": ["html"]
                }
            }
        };
    }

    configureRouter(config, router) {
        this.router = router;
        return this.registry.load(config, 'breadcrumbs');
    }
}