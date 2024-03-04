<template>
    <table >
      <tr>
        <th>Id</th>
        <th>Descrizione</th>
        <th>Stato</th>
        <th>Ultima esecuziome</th>
      </tr>
      <Task
        v-for="(task, index) in tasks"
        :key="task.id"
        :task="task"
        @contextmenu.prevent="openContextMenu($event, index)"
      />
    </table>
    <ModalMenu
      :isVisible="showModal" 
      :x="clickX" 
      :y="clickY" 
      :options="options"
      @optionSelected="handleOptionSelected">
    </ModalMenu>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, CSSProperties } from "vue";
import Task from "@/components/Task.vue"
import { TaskType } from "@/types/TaskType";
import ModalMenu from "@/components/ModalMenu.vue"

export default defineComponent({
  name: 'TaskHandler',
  components: {
    Task,
    ModalMenu
  },

  data() {
    const tasks: TaskType[] = [
      {
        id: 1,
        description: "Prezzi listino Q1",
        status: "completed",
        lastEventTime: new Date("2024-02-23"),
      },
      {
        id: 2,
        description: "Aggiornamento prezzi pezzi di ricambio",
        status: 'scheduled',
      },
    ];
    return {
      showModal: false,
      clickX: 0,
      clickY: 0,
      options: [""],
      tasks,
      selectedTaskIndex: -1, // Store the index of the selected task
    };
  },

  methods: {
    openContextMenu(event: MouseEvent, index: number) {
      this.clickX = event.clientX;
      this.clickY = event.clientY;
      this.options = new Array( index + " - prima opzione", index + " - seconda opzione");
      this.selectedTaskIndex = index; // Store the index when right-click occurs
      this.showModal = true;      
    },
    handleOptionSelected(option: string) {
      console.log('Option selected:', option);

      if (this.selectedTaskIndex !== -1) {
        console.log('Action related to task at index:', this.selectedTaskIndex);
        // Perform any specific logic for the task here

        // Optionally, reset selectedTaskIndex if no longer needed
        this.selectedTaskIndex = -1;
      }

      this.showModal = false; // Close the modal
    },
  }

});
</script>

<style>
  td {
    text-align: left;
  }
  /* Add your styles here */
  .context-menu {
    border: 1px solid #ccc;
    background-color: #f9f9f9;
  }
  
  .context-menu ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .context-menu ul li {
    padding: 8px;
    cursor: pointer;
  }
  
  .context-menu ul li:hover {
    background-color: #f0f0f0;
  }
  </style>