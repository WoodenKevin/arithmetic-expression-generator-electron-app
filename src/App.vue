<template>
    <title-bar />
    <router-view />
</template>

<script>
import { provide, reactive } from 'vue';
import TitleBar from './components/TitleBar.vue';
export default {
    components: {
        TitleBar,
    },
    setup() {
        provide(
            'config',
            reactive({
                expressionTotal: 10,
                valueUpperLimit: 10,
                // valueLowerLimit: 0,
                // needFraction: false,
            })
        );
    },
};
</script>

<style lang="scss">
@import './assets/fonts/fonts.css';

#app {
    width: 100vw;
    height: 100vh;
    font-family: 'SourceHanSansSC-Regular';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@media (prefers-color-scheme: light) {
    #app {
        background-color: $app-background-light;
        color: $app-foreground-light;

        &::selection {
            background: $app-selection-background-light;
            color: $app-foreground-light;
        }
    }
}

@media (prefers-color-scheme: dark) {
    #app {
        background-color: $app-background-dark;
        color: $app-foreground-dark;

        &::selection {
            background: $app-selection-background-dark;
            color: $app-foreground-dark;
        }
    }
}
</style>
