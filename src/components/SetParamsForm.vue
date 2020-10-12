<template>
    <div id="SetParamsForm">
        <a-form>
            <a-form-item :colon="false" class="formItem">
                <template v-slot:label>
                    <span class="formLabel">表达式的个数：</span>
                </template>
                <a-input-number
                    v-model:value="formData.expressionTotal"
                    :min="1"
                />
            </a-form-item>
            <a-form-item :colon="false" class="formItem">
                <template v-slot:label>
                    <span class="formLabel">题目数值范围：</span>
                </template>
                <!-- <a-input-number
                    v-model:value="formData.valueLowerLimit"
                    :min="1"
                    :max="formData.valueUpperLimit - 1"
                /> -->
                0~
                <a-input-number
                    v-model:value="formData.valueUpperLimit"
                    :max="10000"
                />
            </a-form-item>
            <!-- <a-form-item :colon="false" class="formItem">
                <template v-slot:label>
                    <span class="formLabel">是否包含分数：</span>
                </template>
                <a-radio-group
                    v-model:value="formData.needFraction"
                    button-style="solid"
                >
                    <a-radio-button value="true">
                        是
                    </a-radio-button>
                    <a-radio-button value="false">
                        否
                    </a-radio-button>
                </a-radio-group>
            </a-form-item> -->
        </a-form>
    </div>
</template>

<script>
import { reactive } from 'vue';
export default {
    name: 'SetParamsForm',
    props: {
        form: {
            type: Object,
            default() {
                return {
                    expressionTotal: 10,
                    valueUpperLimit: 10,
                    // valueLowerLimit: 0,
                    // needFraction: false,
                };
            },
        },
    },
    setup(props) {
        const formData = reactive(props.form);

        return {
            formData,
        };
    },
};
</script>

<style lang="scss" scoped>
.formItem {
    display: flex;
}

.formLabel {
    width: 2rem;
    height: 0.6rem;
    font-size: 20px;
}

@media (prefers-color-scheme: light) {
    .formItem,
    .formLabel {
        color: $card-foreground-light;
    }
}

@media (prefers-color-scheme: dark) {
    .formItem,
    .formLabel {
        color: $card-foreground-dark;
    }
}
</style>
