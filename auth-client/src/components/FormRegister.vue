<script setup lang="ts">
  import { reactive , toRaw} from "vue"
  import type { AuthUserRegister } from "@/types/Auth"

  const props = defineProps<{
    error: object|string;
    pending: Boolean;
  }>()

  const emit = defineEmits(['submit'])
  
  const form = reactive<AuthUserRegister>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  })

  const submit = async () => {
    emit('submit', toRaw(form))
  }
</script>

<template>
  <form @submit.prevent="submit">  
    <AppInput
      type="text"
      label="Nombre completo"
      name="name"
      v-model="form.name"
      placeholder="Full name"
      class="mb-2"
      data-testid="name-input"
    />
    <AppInput
      type="email"
      label="Correo"
      name="email"
      v-model="form.email"
      placeholder="email@domain.ext"
      class="mb-2"
      data-testid="email-input"
    />
    <AppInput
      type="password"
      label="Clave"
      name="password"
      v-model="form.password"
      placeholder="Password"
      class="mb-2"
      data-testid="password-input"
    />
    <AppInput
      type="password"
      label="Confirmar clave"
      name="password-confirm"
      v-model="form.password_confirmation"
      placeholder="Confirm password"
      class="mb-4"
      data-testid="confirm-password-input"
    />
    <AppBtn
        type="submit"
        :text="props.pending ? 'Registrándose...' : 'Registrarse'"
        :isDisabled='props.pending'
        data-testid="submit-btn"
      />
    
    <AppFlashMessage :error="props.error" />
  </form>
</template>

