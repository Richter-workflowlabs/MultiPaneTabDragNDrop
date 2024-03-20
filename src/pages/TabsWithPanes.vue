<template>
  <q-page>
    <q-splitter
      v-model="splitterModel"
      style="height: 90vh"
      separator-class="bg-orange"
      separator-style="width: 3px"
    >
      <template v-slot:before>
        <q-splitter
          v-model="insideModel1"
          horizontal
          separator-class="bg-orange"
          separator-style="height: 3px"
        >
          <template v-slot:before> pane 1 </template>

          <template v-slot:after> pane 3 </template>
        </q-splitter>
      </template>

      <template v-slot:after>
        <q-splitter
          v-model="insideModel2"
          horizontal
          separator-class="bg-orange"
          separator-style="height: 3px"
        >
          <template v-slot:before> pane 2 </template>

          <template v-slot:after> pane 4 </template>
        </q-splitter>
      </template>
    </q-splitter>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const splitterModel = ref(50); // start at 50%
const insideModel1 = ref(50);
const insideModel2 = ref(50);
</script>
