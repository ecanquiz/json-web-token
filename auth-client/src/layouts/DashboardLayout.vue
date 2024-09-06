<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useAuthStore } from "@/stores"
import Header from "./Header.vue"
import Sidebar from "./Sidebar.vue"
import PageFoot from "./PageFoot.vue"

const store = computed(() => useAuthStore())

onMounted( async ()=> await store.value.getAuthUser() )
</script>

<template>
  <Header />
  <div class="section">
    <Sidebar />
    <div class="flex-1 flex flex-col overflow-hidden">
      <main class="flex-1 overflow-x-hidden overflow-y-auto">
        <div class="container mx-auto p-6">
          <slot />
        </div>
      </main>
      <PageFoot />
    </div>
  </div>
</template>
