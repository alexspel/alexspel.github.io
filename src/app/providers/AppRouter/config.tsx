import { RouteProps } from 'react-router-dom';
import MainPage from '../../../pages/MainPage/ui/MainPage';

export enum AppRoutes {
    main = 'main',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.main]: '/',
};

export const RouteConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.main]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
};