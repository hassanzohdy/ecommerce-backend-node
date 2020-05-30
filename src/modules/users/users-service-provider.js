import siteRoutes from './routes/site';
import ServiceProvider from 'core/service-provider';

export default class UsersServiceProvider extends ServiceProvider {
    /**
     * {@inheritdoc}
     */
    routes = [
        siteRoutes
    ];
}