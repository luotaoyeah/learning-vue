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

    <fieldset>
        <legend>components</legend>

        <F></F>
    </fieldset>

    <fieldset>
        <legend>rendering-slots</legend>

        <G02></G02>
        <G04></G04>
    </fieldset>

    <fieldset>
        <legend>v-model</legend>

        <H01></H01>
        <H02></H02>
    </fieldset>
</template>

<script lang="tsx" setup>
    // http://localhost:8888/guide/extras/render-function

    import { defineComponent, h, onMounted, ref, resolveComponent, type SetupContext, withModifiers } from 'vue';
    import { CompR } from '@/components/CompR';
    import CompS from '@/components/CompS.vue';
    import CompH from '@/components/CompH.vue';
    import CompS02 from '@/components/CompS';
    import CompE from '@/components/CompE.vue';

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
            const C03 = () => (
                <a href="/" onClick={withModifiers(() => console.log('C03.click()'), ['prevent'])}>
                    CLICK
                </a>
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
                h(C03),
            ];
        },
    });

    // --------------------------------------------------
    const F01 = () => [<CompE></CompE>, <comp-e></comp-e>];

    // h() 的第一个参数是组件时, 必须是组件对象, 不能是组件名,
    // 如果无法直接访问组件对象(比如插件中注册的组件), 可以使用 resolveComponent() 方法获取组件对象
    const F = () => [h(resolveComponent('CompE')), h(resolveComponent('comp-e')), h(F01)];

    // --------------------------------------------------
    // render function: 定义 slot outlet
    const G01: any = (props: any, { slots }: SetupContext) => h('fieldset', null, [h('legend', null, slots.default?.()), slots.content?.({ text: 'FOO' })]);
    // render function: 传递 slot content
    const G02 = () =>
        h(G01, null, {
            default: () => 'HEADER',
            content: ({ text }: { text: string }) => h('div', null, text),
        });

    // JSX: 定义 slot outlet
    const G03: any = (props: any, { slots }: SetupContext) => (
        <fieldset>
            <legend>{slots.default?.()}</legend>
            {slots.content?.({ text: 'FOO' })}
        </fieldset>
    );
    // JSX: 传递 slot content
    const G04 = () => (
        <G03>
            {{
                default: () => 'HEADER',
                content: ({ text }: { text: string }) => <div>{text}</div>,
            }}
        </G03>
    );

    // --------------------------------------------------
    // v-model 需要拆成 props + emits 的形式
    const H01 = defineComponent({
        setup() {
            const value01 = ref('foo');
            return () => [
                h('input', {
                    value: value01.value,
                    onInput: (event: InputEvent) => {
                        value01.value = (event.target as any)?.value;
                    },
                }),
                h('div', null, value01.value),
            ];
        },
    });

    const H02 = defineComponent({
        setup() {
            const value01 = ref('foo');
            return () => [
                <input
                    value={value01.value}
                    onInput={(event: Event) => {
                        value01.value = (event.target as any)?.value;
                    }}
                ></input>,
                <div>{value01.value}</div>,
            ];
        },
    });
</script>

<style lang="css" scoped></style>
