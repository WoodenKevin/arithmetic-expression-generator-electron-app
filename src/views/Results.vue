<template>
    <div id="Results">
        <a-card :bordered="false" class="card">
            <template v-slot:title>
                <div class="cardTitle">生成结果</div>
            </template>
            <div class="cardContent">
                <results-table :results="res" />
            </div>
        </a-card>
        <div class="btnGroup">
            <a-button class="btn" @click="back">
                <template v-slot:icon>
                    <ArrowLeftOutlined />
                </template>
                返回
            </a-button>
        </div>
    </div>
</template>

<script>
import { inject, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowLeftOutlined } from '@ant-design/icons-vue';
import ResultsTable from '../components/ResultsTable.vue';
export default {
    components: {
        ArrowLeftOutlined,
        ResultsTable,
    },
    setup() {
        const config = inject('config');

        const router = useRouter();

        const { generator } = window;

        const {
            expressionTotal: { value: expressionTotal = 10 },
            valueUpperLimit: { value: valueUpperLimit = 100 },
        } = toRefs(config);

        let res;
        try {
            res = generator(
                parseInt(expressionTotal),
                parseInt(valueUpperLimit)
            );
        } catch (err) {
            console.log(err);

            res = ref([]);
        }

        const back = () => {
            router.go(-1);
        };

        return {
            res,
            back,
        };
    },
};
</script>

<style lang="scss" scoped>
#Results {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>
