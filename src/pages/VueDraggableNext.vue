<template>
  <q-page padding>
    <div style="margin-right: 100px; margin-bottom: 50px">
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
        <draggable
          class="dragArea list-group w-full"
          :list="elements"
          group="TableGrp"
          tag="tbody"
          @change="log"
        >
          <tr v-for="(element, index) of elements" :key="element.id">
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
        </draggable>
      </q-markup-table>
    </div>

    <div style="margin-right: 100px; margin-bottom: 50px">
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
        <draggable
          class="dragArea list-group w-full"
          :list="elements12"
          group="TableGrp"
          tag="tbody"
          @change="log"
        >
          <tr v-for="(element, index) of elements12" :key="element.id">
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
        </draggable>
      </q-markup-table>
    </div>

    <div class="m-10">
      <div
        style="margin-right: 100px; background-color: red; margin-bottom: 50px"
      >
        <draggable
          class="dragArea list-group w-full"
          :list="list"
          group="sameGrp"
          @change="log"
        >
          <div
            class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center customStyle"
            v-for="element in list"
            :key="element.id"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
      <div style="background-color: yellow">
        <draggable
          class="dragArea list-group w-full"
          :list="list2"
          group="sameGrp"
          @change="log"
        >
          <div
            class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center customStyle"
            v-for="element in list2"
            :key="element.id"
          >
            {{ element.name }}
          </div>
        </draggable>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VueDraggableNext as draggable } from 'vue-draggable-next';

const list = ref([
  { name: 'John', id: 1 },
  { name: 'Abi', id: 2 },
  { name: 'Bowl', id: 3 },
  { name: 'Gerard', id: 4 },
]);
const list2 = ref([
  { name: 'Paul', id: 1 },
  { name: 'Karan', id: 2 },
  { name: 'Cena', id: 3 },
  { name: 'Lona', id: 4 },
  { name: 'Yuvi', id: 5 },
]);

function log(event: any) {
  console.log(event);
}

// const list3 = ref([
//   { name: 'hJohn', id: 1 },
//   { name: 'hAbi', id: 2 },
//   { name: 'hBowl', id: 3 },
//   { name: 'hGerard', id: 4 },
// ]);

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
    title: 'OPEN HEADLINE2',
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
    title: 'OPEN HEADLINE3',
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
</script>

<style scoped>
.customStyle {
  border: 1px solid black;
  margin-top: 5px;
  padding: 5px;
}
</style>
