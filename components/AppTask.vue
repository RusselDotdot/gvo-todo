<template>
  <div class="task-item" @dragstart="dragStart($event, task.title)" @drop="taskDrop($event, `${task.position}-${task.title}`)">
      <h5>{{ task.title }}</h5>
      <div class="selected-tag-list">
          <AppTag v-for="tag in task.tags" :tag="tag" :key="`tags-${tag.title}`"/>
      </div>
  </div>
</template>

<script lang="ts">
    import { Component, Vue, Prop } from 'nuxt-property-decorator';
    import { Task } from '../interfaces/app'

    @Component
    export default class AppTask extends Vue {
        @Prop() task!: Task

        dragStart(event:any, taskTitle:string):void {
          this.$emit('drag-start', {
            event,
            taskTitle
          })
        }
        taskDrop(event:any, pos_title:string):void {
          this.$emit('task-drop', {
            event,
            pos_title
          })
        }

    }
</script>
