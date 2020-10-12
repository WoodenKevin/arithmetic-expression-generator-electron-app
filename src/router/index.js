import { createRouter, createWebHashHistory } from 'vue-router';
import Index from '../views/Index.vue';
// import Intro from '../views/Intro.vue';
import SetParams from '../views/SetParams.vue';
import Results from '../views/Results.vue';

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index,
        children: [
            // {
            //     path: '/',
            //     name: 'Intro',
            //     component: Intro,
            // },
            {
                path: '/',
                name: 'SetParams',
                component: SetParams,
            },
            {
                path: '/results',
                name: 'Results',
                component: Results,
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
