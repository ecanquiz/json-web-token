<script setup lang="ts">  
  import FormLogin from "../components/FormLogin.vue";
  import { useAuthStore } from '@/stores'

  const authStore = useAuthStore()
</script>

<template>
  <div class="p-5 m-auto w-full sm:w-4/12">    
    <h2 class="my-4 text-2xl text-center">Inicio de Sesión</h2>
    <FormLogin
      class="p-5 bg-base-200 border rounded shadow"
      @submit='authStore.login($event)'      
      :pending='authStore.pending'
      :error='authStore.error'
    />
    <p class="mt-2 text-center text-gray-500">
      <AppLink
        to="/register"
        class="text-gray-500 transition hover:text-gray-600"
        data-testid="register-link"
      >
        Regístrese para obtener una cuenta
      </AppLink><br>
      <AppLink
        to="/forgot-password"
        class="underline text-sm text-gray-600 hover:text-gray-900"
        data-testid="forgot-password-link"
      >
        ¿Olvidaste tu contraseña?
      </AppLink>
    </p>
    
  </div>
</template>
