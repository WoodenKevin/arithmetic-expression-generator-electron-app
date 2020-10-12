import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { Button, Card, Form, InputNumber, Radio, Table } from 'ant-design-vue';

createApp(App)
    .use(router)
    .use(Button)
    .use(Card)
    .use(Form)
    .use(InputNumber)
    .use(Radio)
    .use(Table)
    .mount('#app');
