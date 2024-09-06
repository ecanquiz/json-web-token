<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from 'vue-router'

const route = useRoute();
</script>

<template>  
  <nav class="py-6 px-6">     
    <ul>
      <li>    
        <div 
          class="mb-2 py-1 px-2"
          :class="route.path.startsWith(`/users`) ? 'activeClass' : 'inactiveClass'"      
        >      
          <AppLink :to="'/users'">
            <span class="flex items-center group py-0">          
              Usuarios
            </span>
          </AppLink>
        </div>    
      </li>
    </ul>
  </nav>
</template>


