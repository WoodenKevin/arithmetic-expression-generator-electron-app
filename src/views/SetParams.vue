<template>
    <div id="SetParams">
        <a-card :bordered="false" class="card">
            <template v-slot:title>
                <div class="cardTitle">设置参数</div>
            </template>
            <div class="cardContent">
                <set-params-form :form="form" />
            </div>
        </a-card>
        <div class="btnGroup">
            <!-- <a-button class="btn" @click="back">
                <template v-slot:icon>
                    <ArrowLeftOutlined />
                </template>
                返回
            </a-button> -->
            <a-button class="btn" @click="generate">
                <template v-slot:icon>
                    <ArrowRightOutlined />
                </template>
                生成
            </a-button>
        </div>
    </div>
</template>

<script>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import {
    /* ArrowLeftOutlined, */
    ArrowRightOutlined,
} from '@ant-design/icons-vue';
import SetParamsForm from '../components/SetParamsForm.vue';
export default {
    components: {
        // ArrowLeftOutlined,
        ArrowRightOutlined,
        SetParamsForm,
    },
    setup() {
        const router = useRouter();

        const config = inject('config');

        // const back = () => {
        //     router.go(-1);
        // };

        const generate = () => {
            router.push({
                path: `/results`,
            });
        };

        return {
            form: config,
            // back,
            generate,
        };
    },
};
</script>

<style lang="scss" scoped>
#SetParams {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}
</style>
