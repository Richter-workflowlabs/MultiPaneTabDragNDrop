<template>
  <q-page padding>
    <div class="q-my-xl">
      <q-markup-table separator="vertical" flat bordered>
        <thead>
          <tr>
            <th class="text-left">sl</th>
            <th class="text-left">#Id</th>
            <th class="text-left">Title</th>
            <th class="text-left">Format</th>
            <th class="text-left">Clips</th>
            <th class="text-left">Cg</th>
            <th class="text-left">Duration</th>
            <th class="text-left">Planned</th>
            <th class="text-left">Remains</th>
            <th class="text-left">Modified</th>
            <th class="text-left">Created</th>
          </tr>
        </thead>
        <!-- <tbody> -->
        <Sortable :list="elements" item-key="id" tag="tbody" :options="options">
          <template #item="{ element, index }">
            <tr class="draggable" :key="element.id">
              <td class="text-left">{{ index + 1 }}</td>
              <td class="text-left">{{ element.id }}</td>
              <td class="text-left">{{ element.title }}</td>
              <td class="text-left">{{ element.format }}</td>
              <td class="text-left">{{ element.clips }}</td>
              <td class="text-left">{{ element.cg }}</td>
              <td class="text-left">{{ element.duration }}</td>
              <td class="text-left">{{ element.planned }}</td>
              <td class="text-left">{{ element.remains }}</td>
              <td class="text-left">{{ element.modified }}</td>
              <td class="text-left">{{ element.created }}</td>
            </tr>
          </template>
        </Sortable>
      </q-markup-table>
    </div>

    <div class="q-my-md">
      <q-markup-table separator="vertical" flat bordered>
        <thead>
          <tr>
            <th class="text-left">sl</th>
            <th class="text-left">#Id</th>
            <th class="text-left">Title</th>
            <th class="text-left">Format</th>
            <th class="text-left">Clips</th>
            <th class="text-left">Cg</th>
            <th class="text-left">Duration</th>
            <th class="text-left">Planned</th>
            <th class="text-left">Remains</th>
            <th class="text-left">Modified</th>
            <th class="text-left">Created</th>
          </tr>
        </thead>
        <!-- <tbody> -->
        <Sortable
          :list="elements12"
          item-key="id"
          tag="tbody"
          :options="options"
        >
          <template #item="{ element, index }">
            <tr class="draggable" :key="element.id">
              <td class="text-left">{{ index + 1 }}</td>
              <td class="text-left">{{ element.id }}</td>
              <td class="text-left">{{ element.title }}</td>
              <td class="text-left">{{ element.format }}</td>
              <td class="text-left">{{ element.clips }}</td>
              <td class="text-left">{{ element.cg }}</td>
              <td class="text-left">{{ element.duration }}</td>
              <td class="text-left">{{ element.planned }}</td>
              <td class="text-left">{{ element.remains }}</td>
              <td class="text-left">{{ element.modified }}</td>
              <td class="text-left">{{ element.created }}</td>
            </tr>
          </template>
        </Sortable>
      </q-markup-table>
    </div>

    <Sortable :list="elements" item-key="id" :options="options">
      <template #item="{ element }">
        <table>
          <tr>
            <td class="draggable customStyle" :key="element.id">
              {{ element.title }}
            </td>
          </tr>
        </table>
      </template>
    </Sortable>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
// import SortableJs from 'sortablejs';
// import { Swap } from 'sortablejs/modular/sortable.core.esm';
// SortableJs.mount(new Swap());

import { Sortable } from 'sortablejs-vue3';

const elements = ref([
  {
    id: 125311,
    title: 'OPEN MONTAGE',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125312,
    title: 'CLOSING HEADLINE',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125313,
    title: 'OPEN HEADLINE1',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125314,
    title: 'OPEN HEADLINE1',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125315,
    title: 'OPEN HEADLINE1',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125316,
    title: 'BREAK1',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125317,
    title: 'BREAK2',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125318,
    title: 'CLOSING MONTAGE',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
]);
const elements12 = ref([
  {
    id: 125321,
    title: 'OPEN MONTAGE',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125322,
    title: 'CLOSING HEADLINE',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125323,
    title: 'OPEN HEADLINE1',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125324,
    title: 'OPEN HEADLINE1',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125325,
    title: 'OPEN HEADLINE1',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125326,
    title: 'BREAK1',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125327,
    title: 'BREAK2',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
  {
    id: 125328,
    title: 'CLOSING MONTAGE',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  },
]);
const options = ref();
</script>

<style scoped>
.customStyle {
  border: 1px solid black;
  margin: 5px;
}
</style>
