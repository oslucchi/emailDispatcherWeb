<template>
    <tr>
        <td>
            {{ task.id }}
        </td>
        <td>
            {{ task.description }}
        </td>
        <td>
            {{ task.status }}
        </td>
        <td>
            {{ formatDate(task.lastEventTime) }}
        </td>
    </tr>
</template>
  
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TaskType } from "@/types/TaskType";

export default defineComponent({
    name: 'Task',
    props: {
        task: {
            type: Object as PropType<TaskType>,
            required: true,
        },
    },
    methods: {
        formatDate(value: Date) {
            return new Date(value).toDateString();
        }
  }
});
</script>