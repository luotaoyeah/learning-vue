<template>
    <fieldset>
        <legend>all</legend>

        <div class="row">
            <Picker :data="emojiIndexAll" set="apple" @select="showEmojiAll" />
        </div>

        <div class="row">
            <div>
                {{ emojisOutputAll }}
            </div>
        </div>
    </fieldset>
    <fieldset>
        <legend>google</legend>

        <div class="row">
            <Picker :data="emojiIndexGoogle" set="google" @select="showEmojiGoogle" />
        </div>

        <div class="row">
            <div>
                {{ emojisOutputGoogle }}
            </div>
        </div>
    </fieldset>
    <fieldset>
        <legend>twitter</legend>

        <div class="row">
            <Picker :data="emojiIndexTwitter" set="twitter" @select="showEmojiTwitter" />
        </div>

        <div class="row">
            <div>
                {{ emojisOutputTwitter }}
            </div>
        </div>
    </fieldset>
</template>

<script setup>
    import all from 'emoji-mart-vue-fast/data/all.json';
    import google from 'emoji-mart-vue-fast/data/google.json';
    import twitter from 'emoji-mart-vue-fast/data/twitter.json';
    import { EmojiIndex, Picker } from 'emoji-mart-vue-fast/src';
    import { ref } from 'vue';

    let emojiIndexAll = ref(new EmojiIndex(all));
    let emojisOutputAll = ref('');

    let emojiIndexGoogle = ref(new EmojiIndex(google));
    let emojisOutputGoogle = ref('');

    let emojiIndexTwitter = ref(new EmojiIndex(twitter));
    let emojisOutputTwitter = ref('');

    function showEmojiAll(emoji) {
        console.log(emoji.short_name);
        emojisOutputAll.value = emoji.native;
    }

    function showEmojiGoogle(emoji) {
        emojisOutputGoogle.value = emoji.native;
    }

    function showEmojiTwitter(emoji) {
        emojisOutputTwitter.value = emoji.native;
    }
</script>

<style>
    @import 'emoji-mart-vue-fast/css/emoji-mart.css';

    .row {
        display: flex;
    }

    .row > * {
        margin: auto;
    }
</style>
