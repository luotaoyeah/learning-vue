<template>
    <fieldset>
        <legend>defining-a-store</legend>

        <div>{{ store01.getFoo }}</div>
        <button @click="store01.incrementFoo()">++</button>

        <div>{{ store02.getFoo }}</div>
        <button @click="store02.incrementFoo()">++</button>
    </fieldset>

    <fieldset>
        <legend>accessing-the-state</legend>

        <div>{{ store01.foo }}</div>
        <button @click="store01.foo++">++</button>
        <button @click="store01.$reset()">reset</button>
        <button @click="store01.$patch({ foo: 3 })">patch</button>
        <button @click="fn01">patch</button>
    </fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/pinia/core-concepts/defining-a-store

    import { useStore01Store } from '@/views/pinia/core-concepts/store01';
    import { useStore02Store } from '@/views/pinia/core-concepts/store02';

    const store01 = useStore01Store();
    const store02 = useStore02Store();

    function fn01() {
        store01.$patch((state) => {
            state.foo = 6;
        });
    }

    store01.$subscribe((mutation, state) => {
        console.log('mutation', mutation);
    });

    store01.$onAction(({ name, after }) => {
        console.log(`$onAction.actions.${name}()`);

        after((resolvedReturn) => {
            console.log(`after.actions.${name}()`);
        });
    });
</script>

<style scoped></style>
