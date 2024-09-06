<script setup lang="ts">
// @ts-nocheck
import useIndex from "@/composables/User/useIndex";
//import AppPaginationB from "@/components/AppPaginationB.vue";
//import AppPageHeader from "@/components/AppPageHeader.vue"
//import AppBtn from "@/components/AppBtn.vue"
import AvatarIcon from "@/icons/AvatarIcon.vue"

import axios from "axios";


//'client_id': '9cee27b0-f2ff-4b51-aaff-d83f7ae57a1b',
//'client_secret': 'OfnWHsXVtCsx2VoHu93RnZXrZWUCx7oJu5lrxDwD',
//instance.defaults.headers.common['client_id'] = `9cee27b0-f2ff-4b51-aaff-d83f7ae57a1b`;
//instance.defaults.headers.common['client_secret'] = `OfnWHsXVtCsx2VoHu93RnZXrZWUCx7oJu5lrxDwD`;

const config = {
  baseURL: 'http://localhost:8000',
  headers: {
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Y2VlNzVmNy0xNTNhLTQ2NGItYTNhNC04NmZmZjYwMmZmMmUiLCJqdGkiOiIzY2MyNDJmMzIwNTAyZWUxNTc5YTE0MTcxYzg2ODI0MDcwOGRjZmYyMzkzNmU5ZGIwY2ZhMjkxYWQzYzRlNjJlNzFhZDljZWU2NGJiMzFlNiIsImlhdCI6MTcyNTQ4MDAwOS4zMjAzNTgsIm5iZiI6MTcyNTQ4MDAwOS4zMjAzNjIsImV4cCI6MTc1NzAxNjAwOS4zMDYxNzksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.EExYuqa_8ISszEznba6jTi7-wIepVN2NmzDA4Q0XSl5vlJDkzeqr28pBNGcCJlVWJtW5PXZgzTNnOZ1-ej360Y58v2eR2pMw9JA3AigdevWK86E3FaX9WLyI2A5T_iL39hw6kJPf1xvXsXDjQFLb5bJK4OL6L4hzUaUT5ccdyUajvIU1v7aUDkwHyLSYQh77JbuFYWjFqyddLxi0VNTJioBZuyUgDJezPImm-GEgh5mnryj_aY84KaYNd3AF0rAVVehC-WQTiEKNtDI3uD9v9BELdFoUhf6zynjZsfxtsVHOIXcqVNI3qL8e_ygDhQaZJNmt46DTn0l6271MhvuSaNRMFxkQyUAvaNbt1fUDi9gpqk90b6CkSP2O_Exm8ubdI0hRXkB1nIjwFnDFcFIHKauxm6l6bYQqISAf3txewWHFso1n-k1eSB9uoX_yo5aFDQVODHC_k3MGphYJtGTE-OVVaGEoTczX1aVMEeEPbW7_fZy9cfE-1OXiK5HkaD-nFjRU_hzg3RI5nLGZHaXxdQ7E7hnjFVaVHaWBW-vHz0IdXBfdkVJhm5ddkI6xdisqUOv6K58HMEzDRi30dYZgPss2sXZB44peqPfwYr8he6-y8m5nB7OJqeBe0zgCRr5bKWoPBKDzwu8sJOst6nx-DEZTqyivcSGLb3g8kcMuwkY',
    'Accept': 'application/json'

  }
}


const instance = axios.create(config);
//console.log('at', instance.defaults.headers);



//instance.defaults.headers.common['Authorization'] = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Y2VlNzVmNy0xNTNhLTQ2NGItYTNhNC04NmZmZjYwMmZmMmUiLCJqdGkiOiIzY2MyNDJmMzIwNTAyZWUxNTc5YTE0MTcxYzg2ODI0MDcwOGRjZmYyMzkzNmU5ZGIwY2ZhMjkxYWQzYzRlNjJlNzFhZDljZWU2NGJiMzFlNiIsImlhdCI6MTcyNTQ4MDAwOS4zMjAzNTgsIm5iZiI6MTcyNTQ4MDAwOS4zMjAzNjIsImV4cCI6MTc1NzAxNjAwOS4zMDYxNzksInN1YiI6IjEiLCJzY29wZXMiOltdfQ.EExYuqa_8ISszEznba6jTi7-wIepVN2NmzDA4Q0XSl5vlJDkzeqr28pBNGcCJlVWJtW5PXZgzTNnOZ1-ej360Y58v2eR2pMw9JA3AigdevWK86E3FaX9WLyI2A5T_iL39hw6kJPf1xvXsXDjQFLb5bJK4OL6L4hzUaUT5ccdyUajvIU1v7aUDkwHyLSYQh77JbuFYWjFqyddLxi0VNTJioBZuyUgDJezPImm-GEgh5mnryj_aY84KaYNd3AF0rAVVehC-WQTiEKNtDI3uD9v9BELdFoUhf6zynjZsfxtsVHOIXcqVNI3qL8e_ygDhQaZJNmt46DTn0l6271MhvuSaNRMFxkQyUAvaNbt1fUDi9gpqk90b6CkSP2O_Exm8ubdI0hRXkB1nIjwFnDFcFIHKauxm6l6bYQqISAf3txewWHFso1n-k1eSB9uoX_yo5aFDQVODHC_k3MGphYJtGTE-OVVaGEoTczX1aVMEeEPbW7_fZy9cfE-1OXiK5HkaD-nFjRU_hzg3RI5nLGZHaXxdQ7E7hnjFVaVHaWBW-vHz0IdXBfdkVJhm5ddkI6xdisqUOv6K58HMEzDRi30dYZgPss2sXZB44peqPfwYr8he6-y8m5nB7OJqeBe0zgCRr5bKWoPBKDzwu8sJOst6nx-DEZTqyivcSGLb3g8kcMuwkY`;
//instance.defaults.headers.common['Accept'] = `application/json`;





instance.get('api/oauth/clients')
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

const {
  errors,
  data,
  router,

  deleteRow,
  setSearch,
  setSort  
} = useIndex()

const baseURLAvatar = `${process.env.VUE_APP_API_URL_AVATAR}`
</script>

<template>
  <div>
    <AppPageHeader> Usuarios </AppPageHeader>

    <div class="flex space-x-2">
      <AppLink class="btn btn-primary" to="/users/create">
        <span>Crear</span>
      </AppLink>
    </div>
    
    <div class="overflow-hidden panel mt-6">      
      <div class="mb-6 flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex w-full bg-white shadow rounded">
            <input
              class=""
              type="text"
              v-model="data.search"
              @input="setSearch"
              placeholder="Filtrar…"
            />
          </div>
        </div>
      </div>      
      <div class="table-data__wrapper">
        <table class="table-data">
          <thead>
            <tr class="">
              <th class="">
                Avatar
              </th>
              <th class="">
                <AppLink to="#" @click.prevent="setSort('name')">Nombre</AppLink>
              </th>
              <th class="">
                <AppLink to="#" @click.prevent="setSort('email')">Correo</AppLink>
              </th>
              <th class="">
                <AppLink to="#" @click.prevent="setSort('role')">Role</AppLink>
              </th>
              <th class="">Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in data.rows" :key="row.id" class="">
              <td>
              <div class="inline-flex items-center space-x-2">
            <img
              v-if="row.avatar"
              :src="`${baseURLAvatar}/${row.avatar}`"
              class="w-10 h-10 rounded-full"
              alt=""
            />
            <AvatarIcon class="w-10 h-10 text-gray-400 rounded-full" v-else />            
          </div>
              </td>
              <td class="">
                <AppLink
                  class="text-indigo-600 hover:text-indigo-800 underline"
                  :to="{ name: 'userEdit', params: { id: row.id }}"                  
                >
                  {{ row.name }}
                </AppLink>
              </td>
              <td class="">
                {{ row.email }}
              </td>
              <td class="">
                {{ row.role_id }}
              </td>
              <td class="">
                <div class="flex items-center space-x-1">                
                  <AppBtn
                    class="btn btn-primary btn-xs"                    
                    @click="router.push({ path: '/users/edit/'+row.id })"
                  >
                    Editar
                  </AppBtn>
                  <AppBtn
                    @click="deleteRow(row.id)"                    
                    class="btn btn-danger btn-xs"                    
                  >
                    Eliminar
                  </AppBtn>
                </div>
              </td>
            </tr>
            <tr v-if="data.rows.length === 0">
              <td class="" colspan="4">Usuarios no encontrados.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <span v-if="Object.keys(errors).length > 0" class="text-red-500">{{ errors }}</span>
      <AppPaginationB v-if="data.links" :links="data.links" />      
    </div>
  </div>
</template>
