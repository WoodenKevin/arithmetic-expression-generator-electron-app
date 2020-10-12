<template>
    <div id="Index">
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#Index {
    width: 100vw;
    height: calc(100vh - 40px);
    display: flex;
    justify-content: center;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 0 !important;
    }
}

@media (prefers-color-scheme: light) {
    #Index {
        background-color: $app-background-light;

        &::selection {
            background: $app-selection-background-light;
            color: $app-foreground-light;
        }
    }
}

@media (prefers-color-scheme: dark) {
    #Index {
        background-color: $app-background-dark;

        &::selection {
            background: $app-selection-background-dark;
            color: $app-foreground-dark;
        }
    }
}
</style>

<style scoped>
#Index {
    height: calc(100vh - 50px);
}
</style>
