<template>
  <div>
    <!--
        v-slot 指令也支持动态参数
    -->

    <C01 v-slot:foo="{ msg }">
      <Button>
        {{ msg }}
      </Button>
    </C01>
    <br />

    <C01 v-slot:[key01]="{ msg }">
      <Button>
        {{ msg }}
      </Button>
    </C01>
    <br />

    <C01 #[key01]="{ msg }">
      <Button>
        {{ msg }}
      </Button>
    </C01>
  </div>
</template>

<script lang="ts" src="./C0802.tsx"></script>
