import { ref } from 'vue'

export default {
    setup() {

    },
    template: String.raw`
        <v-main>
            <v-container fluid class="fill-height bg-surface-variant-">
                <v-row class="fill-height">
                    <v-col align-self="center" sm="6" md="4" lg="4" offset-sm="3" offset-md="4" offset-lg="4">
                        <v-card class="elevation-12">
                            <v-toolbar color="primary">
                                <v-toolbar-title>Аутентификация</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form class="pb-0">
                                    <v-text-field prepend-icon="mdi-account"
                                        name="login"
                                        label="Логин"
                                        type="text"

                                        
                                        required
                                    ></v-text-field>
                                    <v-text-field prepend-icon="mdi-lock"
                                        name="password"
                                        label="Пароль"
                                        id="password"

                                        type="password"
                                        
                                        required
                                    ></v-text-field>
                                    <v-row class="ma-0">
                                        <v-spacer class="text-red-darken-2 font-weight-medium pl-10 pt-1">{{ messsage }}</v-spacer>
                                        <v-btn color="primary" @click="login"  min-width="120">Вход</v-btn>
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