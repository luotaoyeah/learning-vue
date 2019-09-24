<template>
  <div>
    <!--
        在 vue@2.6 之前，如果指令参数是动态的，
        则需要使用 v-bind 指令的对象形式
    -->
    <Button
      v-bind="{
        [key01]: 'FOO',
      }"
      v-on="{
        [key02]: () => {
          $message.success('CLICK');
        },
      }"
    >
      FOO
    </Button>
    &nbsp;

    <!--
        在 vue@2.6 之后，可以直接使用下面的形式
    -->
    <Button v-bind:[key01]="'FOO'" v-on:[key02]="$message.error('CLICK')">
      FOO
    </Button>
    &nbsp;
    <Button :[key01]="'FOO'" @[key02]="$message.info('CLICK')">
      FOO
    </Button>
  </div>
</template>

<script lang="ts" src="./C0801.tsx"></script>
