import { ref } from "vue"
import { useRouter } from 'vue-router';
import * as AuthService from "@/services";
import { getError } from "@/utils/helpers.js";
import type { AuthUserRegister } from "@/types/Auth"

export function useRegister() {
  const router = useRouter();
  const error = ref('')
  const pending = ref(false)
  
  const register = async (payload: AuthUserRegister) => {
    error.value = '';
    pending.value = true;  
    AuthService.registerUser(payload)
      .then((response) => {
        alert(response.data.message)
        router.push("/login")
      })
      .catch((e) => error.value = getError(e))
      .finally(() => pending.value = false);
  }

  return {
    register,
    pending,
    error
  }
}
