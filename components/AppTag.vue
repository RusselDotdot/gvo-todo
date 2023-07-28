<template>
  <span class="tagTitle">{{ tag.title }}</span>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'nuxt-property-decorator';
    import { Tag } from '../interfaces/app'

    @Component
    export default class AppTag extends Vue {
        @Prop() tag!: Tag
    }
</script>

<style>
  .tagTitle {
      color: #FFFFFF;
      background: #A1AF2F;
      border-radius: 10px;
      width: 49px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
  }
</style>
