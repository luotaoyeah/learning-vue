<template>
    <fieldset>
        <legend>render-functions</legend>

        <A></A>
        <B></B>
        <C></C>
    </fieldset>

    <fieldset>
        <legend>jsx-tsx</legend>

        <CompR></CompR>
        <CompS></CompS>
        <CompS02></CompS02>
    </fieldset>

    <fieldset>
        <legend>vnodes-must-be-unique</legend>

        <D></D>
    </fieldset>

    <fieldset>
        <legend>v-if</legend>

        <E></E>
    </fieldset>
</template>

<script lang="tsx" setup>
    // http://localhost:8888/guide/extras/render-function

    import { defineComponent, h, onMounted, ref } from 'vue';
    import { CompR } from '@/components/CompR';
    import CompS from '@/components/CompS.vue';
    import CompH from '@/components/CompH.vue';
    import CompS02 from '@/components/CompS';

    const A = defineComponent({
        setup() {
            const ref01 = ref(null);

            onMounted(() => {
                console.log('ref01', ref01.value);
            });

            return () => h('div', { class: 'foo', style: { color: 'red' }, ref: ref01 }, ['A']);
        },
    });

    const B = defineComponent({
        setup() {
            // attribute 和 property 都可以往 props 传, vue 会自行处理
            return () =>
                h('div', [
                    h('div', { class: 'bar', innerHTML: 'B' }),
                    h(CompH, {
                        onTMove01: () => {
                            console.log('t-move-01');
                        },
                    }),
                    'FOO',
                    h('div', ['BAR']),
                ]);
        },
    });

    const C = defineComponent({
        setup() {
            // render function 返回一个数组
            return () => [h('div', '1'), h('div', '2'), h('div', '3')];
        },
    });

    const D = defineComponent({
        setup() {
            const vnode01 = h('button', { onClick: () => console.log('A.click()') }, 'CLICK');

            // vnode 不允许重复使用
            return () => [vnode01, vnode01];
        },
    });

    const E = defineComponent({
        setup() {
            const visible = ref(true);
            const items = [1, 2, 3];

            // 函数组件, 并且使用了 JSX
            const C01 = () => <div>{visible.value ? 'BAR' : undefined}</div>;
            const C02 = () => (
                <ul>
                    {items.map((i) => (
                        <li>{i}</li>
                    ))}
                </ul>
            );

            return () => [
                h('div', [
                    // v-if
                    visible.value ? 'FOO' : undefined,
                    h(C01),
                    h(
                        'button',
                        {
                            onClick: () => {
                                visible.value = !visible.value;
                            },
                        },
                        'TOGGLE',
                    ),
                ]),
                h('div', [
                    h(
                        'ul',
                        items.map((i) => h('li', i)),
                    ),
                    h(C02),
                ]),
            ];
        },
    });
</script>

<style lang="css" scoped></style>
