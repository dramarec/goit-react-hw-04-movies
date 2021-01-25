import { lazy } from 'react';

export const optionRoutes = [
    {
        path: '/movies/:movieId/cast',
        url: '/cast',
        name: 'Cast',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/movieDetailsPage/cast/Cast' /* webpackChunkName: "Cast" */
            ),
        ),
    },
    {
        path: '/movies/:movieId/reviews',
        url: '/reviews',
        name: 'Reviews',
        exact: true,
        component: lazy(() =>
            import(
                '../pages/movieDetailsPage/reviews/Reviews' /* webpackChunkName: "Reviews" */
            ),
        ),
    },
];
