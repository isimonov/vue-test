import { ref } from 'vue'
import ky from 'ky'

// lit-html plugin
const html = String.raw;

const json = await ky.get('/vue-test/data/test.json').json();
console.log(json);

export default {
//    setup: () => ({
//        count: ref(0),
//    }),
    setup() {
        const count = ref(0);

        const headers = ref([
            { title: '#', key: 'id'},
            { title: 'Title', align: 'left', key: 'title' },
        ]);

        const items = ref([]);
        items.value.push({
            id: 1,
            title: 'test1'
        });
        items.value.push({
            id: 2,
            title: 'test2'
        });
        items.value.push({
            id: 3,
            title: 'test3'
        });
    
        return { count, headers, items };
    },
    template: html`
        <v-btn @click="count++">
            You clicked me {{ count }} times
        </v-btn>
        <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-1"
        >
            <template v-slot:item="{ item }">
                <tr>
                    <td class="text-xs-right">{{ item.columns.id }}</td>
                    <td>{{ item.columns.title }}</td>
                </tr>
            </template>
        </v-data-table>
    `
}