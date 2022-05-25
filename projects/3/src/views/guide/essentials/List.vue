<template>
    <fieldset>
        <legend>v-for-with-an-object</legend>

        <!--使用 v-for 遍历一个对象的属性-->
        <ul>
            <li v-for="(value, key, index) in obj01">{{ index }}. {{ key }}: {{ value }}</li>
        </ul>
    </fieldset>

    <fieldset>
        <legend>v-for-with-a-range</legend>

        <!--遍历指定次数-->
        <!--下面 i 的取值从 1 开始-->
        <ul>
            <li v-for="(i, index) in 3">{{ index }}: {{ i }}</li>
        </ul>
    </fieldset>

    <fieldset>
        <legend>maintaining-state-with-key</legend>

        <!--默认没有绑定 key, 则当列表数据变更时, 每个遍历都会尽可能地直接重用上次渲染的节点-->
        <ul>
            <li v-for="item in items01">
                {{ item.id }}.
                <CompA :id="item.id" :type="1" :data-time="Date.now()"></CompA>
            </li>
        </ul>

        <hr />

        <!--
        如果绑定了 key, 则当列表数据变更时, vue 会比较每个节点的 key 是否跟上次渲染时一样,
        如果不一样, 则该节点就会重新渲染, 如果一样, 则该节点就会直接重用
    -->
        <ul>
            <li v-for="item in items01">
                {{ item.id }}.
                <CompA :id="item.id" :type="2" :key="item.id" :data-time="Date.now()"></CompA>
            </li>
        </ul>

        <button @click="onClick01">reverse</button>
        <button @click="onClick02">push</button>

        <!--
        总结: vue 会判断 key 是否变化, 如果没变, 则重用节点, 否则重新渲染,
             1. 默认没绑定 key, 相当于 key 每次都不会变, 也就是每次都会重用节点
             2. 如果绑定了 key, 则 vue 会用绑定的 key 来判断是否变化
    --></fieldset>
</template>

<script lang="ts" setup>
    // http://localhost:8888/guide/essentials/list
    import { defineComponent, reactive } from 'vue';

    const obj01 = reactive({
        foo: 'A',
        bar: 'B',
        baz: 'C',
    });

    // --------------------------------------------------

    let items01 = reactive([{ id: 1 }, { id: 2 }, { id: 3 }]);

    function onClick01() {
        items01 = reactive(items01.reverse());
    }

    function onClick02() {
        items01.push({ id: items01.length + 1 });
    }

    // 定义一个简单的组件, 用于演示
    const CompA = defineComponent({
        props: ['id', 'type'],
        mounted() {
            console.log(`mounted: ${this.type}: ${this.id}`);
        },
        unmounted() {
            console.log(`unmounted: ${this.type}: ${this.id}`);
        },
    });
</script>

<style lang="css" scoped></style>
