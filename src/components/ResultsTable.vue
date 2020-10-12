<template>
    <div id="ResultsTable">
        <a-table
            :key="record => record.dataIndex"
            :columns="columns"
            :data-source="data"
            :pagination="paginationConfig"
        >
            <template v-slot:expression="{ text }">
                <div class="content">{{ text }}</div>
            </template>
            <template v-slot:answer="{ text }">
                <div class="content">{{ text }}</div>
            </template>
        </a-table>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: 'ResultsTable',
    props: {
        results: {
            type: Array,
            default() {
                return new Array();
            },
        },
    },
    setup(props) {
        const columns = [
            {
                title: '题目',
                dataIndex: 'expression',
                key: 'expression',
            },
            {
                title: '答案',
                dataIndex: 'answer',
                key: 'answer',
            },
        ];

        const data = reactive(props.results);

        const paginationConfig = {
            pageSizeOptions: ['8'],
        };

        return {
            columns,
            data,
            paginationConfig,
        };
    },
};
</script>

<style lang="scss" scoped></style>
