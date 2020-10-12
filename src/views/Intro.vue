<template>
    <div id="Intro">
        <a-card :bordered="false" class="card">
            <template v-slot:title>
                <div class="cardTitle">介绍</div>
            </template>
            <div class="cardContent">这是一段介绍</div>
        </a-card>
        <a-button class="startBtn" @click="start">
            <template v-slot:icon>
                <ArrowRightOutlined />
            </template>
            开始
        </a-button>
    </div>
</template>

<script>
import { useRouter } from 'vue-router';
import { ArrowRightOutlined } from '@ant-design/icons-vue';
export default {
    components: {
        ArrowRightOutlined,
    },
    setup() {
        const router = useRouter();

        const start = () => {
            router.push({
                path: '/set-params',
            });
        };

        return {
            start,
        };
    },
};
</script>

<style lang="scss" scoped>
#Intro {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}

.startBtn {
    width: 120px;
    height: 50px;
    margin-right: 25px;
    border: {
        width: 0;
        radius: 0.2rem;
    }
    font-size: 20px;
    color: $accent-color;
}

@media (prefers-color-scheme: light) {
    .startBtn {
        background-color: $card-background-light;
        box-shadow: 0.05rem 0.05rem 0.05rem
            rgba($color: $card-background-light, $alpha: 0.5);
    }
}

@media (prefers-color-scheme: dark) {
    .startBtn {
        background-color: $card-background-dark;
        box-shadow: 0.05rem 0.05rem 0.05rem
            rgba($color: $card-background-dark, $alpha: 0.5);
    }
}
</style>
