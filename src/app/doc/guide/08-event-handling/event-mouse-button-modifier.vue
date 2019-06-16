<template>
  <div>
    <h1>9. Mouse Button Modifier</h1>
    <p>
      <small> <i> </i> </small>
    </p>
    <span style="border: 2px solid red;padding: 10px;" v-on:click="handleClick">
      left，middle，right
    </span>
    <span
      style="border: 2px solid red;padding: 10px;"
      v-on:click.left="handleClick"
    >
      only left
    </span>
    <span
      style="border: 2px solid red;padding: 10px;"
      v-on:click.middle="handleClick"
    >
      only middle
    </span>
    <span
      style="border: 2px solid red;padding: 10px;"
      v-on:click.right="handleClick"
    >
      only right
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleClick(e) {
      if (e) {
        alert(e.target.tagName);
      }
    }
  }
};
</script>
