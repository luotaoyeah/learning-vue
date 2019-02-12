<template>
  <div>
    <!--
        v-slot 指令也支持动态参数
    -->
    <C01 v-slot:foo="{ msg }">
      <ElButton>
        {{ msg }}
      </ElButton>
    </C01>
    <C01 v-slot:[key01]="{ msg }">
      <ElButton>
        {{ msg }}
      </ElButton>
    </C01>
    <C01 #[key01]="{ msg }">
      <ElButton>
        {{ msg }}
      </ElButton>
    </C01>
  </div>
</template>

<script lang="ts" src="./C0802.tsx"></script>
