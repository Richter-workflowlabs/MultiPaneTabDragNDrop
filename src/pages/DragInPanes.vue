<template>
  <q-page padding>
    <div>
      <q-splitter
        v-model="splitterModel"
        style="height: 90vh"
        separator-class="bg-orange"
        separator-style="width: 3px"
      >
        <template v-slot:before>
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
        </template>

        <template v-slot:after>
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
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VueDraggableNext as draggable } from 'vue-draggable-next';

const splitterModel = ref(50); // start at 50%

function log(event: any) {
  console.log(event);
}

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
