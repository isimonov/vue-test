import { createApp, ref, watch } from 'vue'
//import { createVuetify } from 'vuetify'
import { createVuetify } from 'vuetify-labs'
import { createRouter, createWebHistory, createWebHashHistory, useRoute } from 'vue-router'

createApp({
    setup() {
        const template = ref(false);
        const breadcrumbs = ref(['Main']);

        const route = useRoute()
        watch(route, value => {
            template.value = value.path !== '/login';
            breadcrumbs.value = [ breadcrumbs.value.shift() ].concat([(value.name ?? 'page').replace(/^./, str => str.toUpperCase())]);
        });

        const drawer = ref(JSON.parse(sessionStorage.getItem('app.drawer')) ?? false);
        watch(drawer, value => sessionStorage.setItem('app.drawer', JSON.stringify(value)));

        return {
            template,
            breadcrumbs,
            drawer,
        };
    },
    template: String.raw`
        <v-app v-if="template">
            <v-navigation-drawer v-model="drawer">
                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home" to="/"></v-list-item>
                    <v-list-item prepend-icon="mdi-forum" title="About" value="about" to="/about"></v-list-item>
                    <v-list-item prepend-icon="mdi-help" title="Help" value="help" to="/help"></v-list-item>
                    <v-list-item prepend-icon="mdi-login" title="Login" value="login" to="/login"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-app-bar color="primary" absolute>
                <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-app-bar-title>Test</v-app-bar-title>
            </v-app-bar>
            <v-main>
                <v-container fluid>
                    <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
                    <router-view></router-view>
                </v-container>
            </v-main>
        </v-app>
        <v-app v-else>
            <router-view></router-view>
        </v-app>
    `,
})
.use(createVuetify())
.use(createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: {
                template: String.raw`
                    <p>
                        Hello, World!
                    </p>
                `
            }
        },
        {
            path: '/about',
            name: 'about',
            component: {
                template: String.raw`
                    <p>
                        Hello, About!
                    </p>
                `
            }
        },
        { path: '/help', name: 'help', component: () => import('./help.js') },
        { path: '/login', name: 'login', component: () => import('./login.js') },
        { path: '/:catchAll(.*)', component: { template: '<h1>Page not found</h1>' } }
    ]
}))
.mount('#app')