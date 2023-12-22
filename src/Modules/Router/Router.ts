import paths from './RouterPaths';
import { IRoute, RouteHandler, AnyHandler, UnknownHandler } from './RouterTypes';

class Router {
    private routes: IRoute[];
    private nearestUrl: string;
    private currentUrl: string = '';

    public constructor() {
        this.routes = [];
        this.nearestUrl = paths.feedAll;
    }

    public start(entryPath: string): void {
        history.replaceState({ path: entryPath }, '', entryPath);
        this.currentUrl = entryPath;
        window.addEventListener('popstate', e => {
            e.preventDefault();
            this.route();
        });

        this.route();
    }

    public goToPage(path: string): void {
        if(path === this.currentUrl) {
            return;
        }
        history.pushState({ path: path }, '', path);
        this.route();
    }

    private route(): void {
        const rawPath = history.state?.path;

        if (!rawPath) {
            return;
        }

        const path = this.sanitizeUrl(rawPath);

        const foundedPath = this.routes.find(({ rule, handler }) => {
            const match = path.match(rule);

            if (match) {
                handler(match.slice(1));
            }
            return match;
        });

        if (!foundedPath) {
            return;
        }
    }

    public addRule(rule: string, handler: RouteHandler): IRoute {
        const newRoute = {
            rule: this.parseRule(rule),
            handler: handler,
        };
        this.routes.push(newRoute);
        return newRoute;
    }

    public removeRule(rule: string): void {
        const index = this.routes.findIndex(
            route => route.rule.source === this.parseRule(rule).source
        );
        if (index > -1) {
            this.routes.splice(index, 1);
        }
    }

    public getNearestUrl(): string {
        return this.nearestUrl;
    }

    private parseRule(rule: string): RegExp {
        const uri = this.sanitizeUrl(rule)
            .replace(/{:id}/g, '(\\d+)')
            .replace(/{:\w+}/, '([A-Za-zА-Яа-яЁё]+)');
        return new RegExp(`^${uri}$`, 'i');
    }

    private sanitizeUrl(rule: string): string {
        return rule.replace(/\/$/, '').replace(/^\//, '');
    }
}

const router = new Router();
export default router;