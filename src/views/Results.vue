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
            <a-button class="btn" @click="exportData">
                <template v-slot:icon>
                    <DownloadOutlined />
                </template>
                导出
            </a-button>
            <a-button class="btn" @click="back">
                <template v-slot:icon>
                    <ArrowLeftOutlined />
                </template>
                返回
            </a-button>

            <div class="status" v-if="exportDataStatus == 'start'">
                开始导出
            </div>
            <div class="status" v-else-if="exportDataStatus == 'success'">
                导出成功
            </div>
            <div class="status" v-else-if="exportDataStatus == 'failed'">
                导出失败
            </div>
        </div>
    </div>
</template>

<script>
import { inject, ref, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { ArrowLeftOutlined, DownloadOutlined } from '@ant-design/icons-vue';
import ResultsTable from '../components/ResultsTable.vue';
export default {
    components: {
        ArrowLeftOutlined,
        DownloadOutlined,
        ResultsTable,
    },
    setup() {
        const config = inject('config');

        const router = useRouter();

        const { generator, writeFiles } = window;

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
            res = ref([]);
        }

        const back = () => {
            router.go(-1);
        };

        const exportDataStatus = ref('ready');

        const exportData = () => {
            if (exportDataStatus.value == 'ready') {
                let expressions = `题目 （共${res.length}道）：\n\n`,
                    answers = `题目答案 （共${res.length}道）：\n\n`;

                res.forEach((obj, index) => {
                    let { expression, answer } = obj;

                    expressions += `${index}. ${expression}\n`;
                    answers += `${index}. ${answer}\n`;
                });

                exportDataStatus.value = 'start';
                let { status: eStatus } = writeFiles(
                    'expressions.txt',
                    expressions
                );
                let { status: aStatus } = writeFiles('answers.txt', answers);

                if (eStatus == 'ok' && aStatus == 'ok') {
                    exportDataStatus.value = 'success';
                } else {
                    exportDataStatus.value = 'failed';
                }

                setInterval(() => {
                    exportDataStatus.value = 'ready';
                }, 1500);
                clearInterval();
            }
        };

        return {
            res,
            back,
            exportDataStatus,
            exportData,
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

.status {
    margin-right: 25px;
}
</style>
