<template>
    <div id="TitleBar">
        <div class="title">算术表达式生成器</div>
        <div class="titleBarBtnGroup">
            <div class="titleBarBtn" @click="min"><MinusOutlined /></div>
            <div class="titleBarBtn" v-if="status == 'UNMAX'" @click="max">
                <ExpandOutlined />
            </div>
            <div class="titleBarBtn" v-else-if="status == 'MAX'" @click="unmax">
                <CompressOutlined />
            </div>
            <div class="titleBarBtn" @click="close"><CloseOutlined /></div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import {
    MinusOutlined,
    ExpandOutlined,
    CompressOutlined,
    CloseOutlined,
} from '@ant-design/icons-vue';

export default {
    components: {
        MinusOutlined,
        ExpandOutlined,
        CompressOutlined,
        CloseOutlined,
    },
    setup() {
        const { ipcRenderer } = window;

        let status = ref('UNMAX');

        const min = () => {
            ipcRenderer.send('min');
        };

        const max = () => {
            status.value = 'MAX';
            ipcRenderer.send('max');
        };

        const unmax = () => {
            status.value = 'UNMAX';
            ipcRenderer.send('unmax');
        };

        const close = () => {
            ipcRenderer.send('close');
        };

        return {
            status,
            min,
            max,
            unmax,
            close,
        };
    },
};
</script>

<style lang="scss" scoped>
#TitleBar {
    width: 100vw;
    height: 40px;
    padding: 0 25px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-app-region: drag;
}

@media (prefers-color-scheme: light) {
    #TitleBar {
        background-color: $card-background-light;
        color: $card-foreground-light;
    }
}

@media (prefers-color-scheme: dark) {
    #TitleBar {
        background-color: $card-background-dark;
        color: $card-foreground-dark;
    }
}

.title {
    font-size: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-user-select: none;
}

@media (prefers-color-scheme: light) {
    .title {
        color: $card-foreground-light;
    }
}

@media (prefers-color-scheme: dark) {
    .title {
        color: $card-foreground-dark;
    }
}

.titleBarBtnGroup {
    display: flex;
    justify-content: space-between;
    align-items: center;
    -webkit-app-region: no-drag;
}

.titleBarBtn {
    width: 45px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

    & ::v-deep(.anticon) {
        font-size: 16px;
    }
}

@media (prefers-color-scheme: light) {
    .btn ::v-deep(.anticon) {
        color: $card-foreground-light;
    }
}

@media (prefers-color-scheme: dark) {
    .btn ::v-deep(.anticon) {
        color: $card-foreground-dark;
    }
}
</style>
