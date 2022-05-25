<template>
    <fieldset>
        <legend>I</legend>

        <p>
            <input :value="modelValue" type="text" @input="fn01" />
        </p>

        <p>
            <input :value="tName" type="text" @input="fn02" />
        </p>

        <p>
            <input v-model="tAgeComputed" type="text" />
        </p>
    </fieldset>
</template>

<script lang="ts" setup>
    import { computed } from 'vue';

    const props = defineProps({
        modelValue: String,
        modelModifiers: Object,
        tName: String,
        tNameModifiers: Object,
        tAge: Number,
        tAgeModifiers: {
            type: Object,
            default: () => {
                return {};
            },
        },
    });

    const emit = defineEmits(['update:modelValue', 'update:tName', 'update:tAge']);

    const tAgeComputed = computed({
        get: () => {
            console.log('tAgeModifiers:', props.tAgeModifiers);
            return props.tAge;
        },
        set: (value) => {
            console.log('tAgeModifiers:', props.tAgeModifiers);
            emit('update:tAge', Number(value));
        },
    });

    function fn01($event: Event) {
        emit('update:modelValue', ($event.target as any)?.value);
    }

    function fn02($event: Event) {
        emit('update:tName', ($event.target as any)?.value);
    }
</script>

<style scoped></style>
