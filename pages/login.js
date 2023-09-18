import { ref } from 'vue'

export default {
    setup() {
        const message = ref('');

        const login = () => {
            message.value = 'Username or password is incorrect';
        };

        return { message, login }
    },
    methods: {

    },
    template: String.raw`
        <v-main>
            <v-container fluid class="fill-height bg-surface-variant-">
                <v-row class="fill-height">
                    <v-col align-self="center" sm="6" md="4" lg="4" offset-sm="3" offset-md="4" offset-lg="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary">
                                <v-toolbar-title>Authentication</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form class="pb-0">
                                    <v-text-field prepend-icon="mdi-account"
                                        name="username"
                                        label="Username"
                                        type="text"
                                        required
                                    ></v-text-field>
                                    <v-text-field prepend-icon="mdi-lock"
                                        name="password"
                                        label="Password"
                                        id="password"
                                        type="password"
                                        required
                                    ></v-text-field>
                                    <v-row class="ma-0">
                                        <v-spacer class="text-red-darken-2 font-weight-medium pl-10 pt-1">{{ message }}</v-spacer>
                                        <v-btn color="primary" @click="login"  min-width="120">Login</v-btn>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>        
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    `
}