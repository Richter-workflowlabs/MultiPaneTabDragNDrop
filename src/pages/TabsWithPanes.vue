<template>
  <q-page>
    <q-tabs v-model="tabSelected.id" @update:model-value="selectTabFn" inline-label dense
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'" align="justify" active-color="primary"
      :style="{ width: tabsArray.length * 16 + 'vw' }" style="cursor: crosshair" class="tabsParent">
      <q-tab v-for="item in tabsArray" :key="item.id" :name="item.id" style="border-right: 2px solid white">
        <template v-slot>
          <div class="tabStyle row items-center" style="width: 100%; height: 100%">
            <q-icon name="mail" size="16px" class="q-pr-lg"></q-icon>
            <span class="q-pr-lg">{{ item.name }}</span>
            <q-icon name="close" @click="closeTab(item.id)" size="20px"></q-icon>
          </div>
        </template>
      </q-tab>
      <!-- <q-tab name="tab2" label="Tab2" /> -->
      <q-btn icon="add" size="16px" style="padding: 5px" @click="addTabs" />
    </q-tabs>
    <q-tab-panels v-model="tabSelected.panes">
      <q-tab-panel name="pane1">pane 1 </q-tab-panel>
      <!-- four panes  -->
      <q-tab-panel name="pane4">
        <q-splitter v-model="splitterModel" style="height: 90vh" separator-class="bg-orange"
          separator-style="width: 3px">
          <template v-slot:before>
            <q-splitter v-model="insideModel1" horizontal separator-class="bg-orange" separator-style="height: 3px">
              <template v-slot:before>
                pane 1
                <draggable class="dragArea list-group w-full" :list="droppedElement" group="mediaDrop" tag="div"
                  @change="log" @add="onDropCheck1">
                  <!-- for media dropping -->
                  <q-list bordered v-if="ismediaData" style="padding: 5px; max-width: 280px">
                    <draggable class="dragArea list-group w-full" :list="mediaData"
                      :group="{ name: 'TableGrp', pull: 'clone', put: false }" tag="div">
                      <q-item clickable v-ripple v-for="item in mediaData" :key="item.id" style="max-width: 280px"
                        class="rounded-borders">
                        <q-item-section avatar>
                          <img :src="item.imageSrc" style="width: 50px;height: 50px;border-radius: 5px;" />
                        </q-item-section>
                        <q-item-section>
                          <q-item-label lines="1">{{ item.title }}</q-item-label>
                          <q-item-label caption lines="1" class="row justify-between">
                            <span>{{ item.date }}</span>
                            <span>{{ item.timeDuration }}</span>
                          </q-item-label>
                        </q-item-section>
                      </q-item>
                    </draggable>
                  </q-list>
                  <!-- for Rundown dropping -->
                  <q-markup-table separator="vertical" flat bordered dense v-if="isRundownPane1">
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
                    <draggable class="dragArea list-group w-full" :list="tableElements1" group="TableGrp" tag="tbody"
                      @change="log">
                      <tr v-for="(element, index) of tableElements1" :key="element.id">
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
                </draggable>
              </template>

              <template v-slot:after> pane 3
                <draggable class="dragArea list-group w-full" :list="droppedElement" group="mediaDrop" tag="div"
                  @change="log" @add="onDropCheck3">
                <!-- for Rundown dropping -->
                <q-markup-table separator="vertical" flat bordered dense v-if="isRundownPane3">
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
                    <draggable class="dragArea list-group w-full" :list="tableElements3" group="TableGrp" tag="tbody"
                      @change="log">
                      <tr v-for="(element, index) of tableElements3" :key="element.id">
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
                </draggable>
              </template>
            </q-splitter>
          </template>

          <template v-slot:after>
            <q-splitter v-model="insideModel2" horizontal separator-class="bg-orange" separator-style="height: 3px">
              <template v-slot:before> pane 2
                <draggable class="dragArea list-group w-full" :list="droppedElement" group="mediaDrop" tag="div"
                  @change="log" @add="onDropCheck2">
                <!-- for Rundown dropping -->
                <q-markup-table separator="vertical" flat bordered dense v-if="isRundownPane2">
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
                    <draggable class="dragArea list-group w-full" :list="tableElements2" group="TableGrp" tag="tbody"
                      @change="log">
                      <tr v-for="(element, index) of tableElements2" :key="element.id">
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
                </draggable>
              </template>

              <template v-slot:after> pane 4
                <draggable class="dragArea list-group w-full" :list="droppedElement" group="mediaDrop" tag="div"
                  @change="log" @add="onDropCheck4">
                <!-- for Rundown dropping -->
                <q-markup-table separator="vertical" flat bordered dense v-if="isRundownPane4">
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
                    <draggable class="dragArea list-group w-full" :list="tableElements4" group="TableGrp" tag="tbody"
                      @change="log">
                      <tr v-for="(element, index) of tableElements4" :key="element.id">
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
                </draggable>
              </template>
            </q-splitter>
          </template>
        </q-splitter>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { VueDraggableNext as draggable } from 'vue-draggable-next';

const splitterModel = ref(50); // start at 50%
const insideModel1 = ref(50);
const insideModel2 = ref(50);
const ismediaData = ref<boolean>(false);
const droppedElement = ref([]);
const isRundownPane1 = ref<boolean>(false);
const isRundownPane2 = ref<boolean>(false);
const isRundownPane3 = ref<boolean>(false);
const isRundownPane4 = ref<boolean>(false);
const tabSelected = ref<tabObjType>({
  id: '1',
  name: 'New Tab',
  panes: 'pane1',
});
const tabsArray = ref<tabObjType[]>([
  { id: '1', name: 'New Tab', panes: 'pane1' },
]);

type tabObjType = {
  id: string;
  name: string;
  panes: string;
};

const mediaData = ref([
  {
    title: 'WindyStream',
    date: '17/7/2023',
    timeDuration: '00:00:51',
    imageSrc: 'https://cdn.quasar.dev/img/avatar3.jpg',
    id: 21,
  },
  {
    title: 'CROWD_JUMPS_LIGHTS_PULSE',
    date: '12/8/2022',
    timeDuration: '00:00:51',
    imageSrc: 'https://cdn.quasar.dev/img/avatar1.jpg',
    id: 22,
  },
  {
    title: 'LiveRain',
    date: '14/9/2021',
    timeDuration: '00:00:51',
    imageSrc: 'https://cdn.quasar.dev/img/avatar4.jpg',
    id: 23,
  },
  {
    title: 'GLASS_BACKGROUND_CLUB',
    date: '8/3/2024',
    timeDuration: '00:00:51',
    imageSrc: 'https://cdn.quasar.dev/img/avatar2.jpg',
    id: 24,
  },
]);
const tableElements1 = ref([
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
const tableElements2 = ref([
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
    id: 125325,
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
]);
const tableElements3 = ref([
  {
    id: 125331,
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
    id: 125332,
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
]);
const tableElements4 = ref([
  {
    id: 125341,
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
    id: 125342,
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
    id: 125343,
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
    id: 125344,
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
    id: 125345,
    title: 'OPEN HEADLINE3',
    format: 'Montage',
    clips: 2,
    cg: 3,
    duration: '00:00:14',
    planned: '00:00:00',
    remains: '00:29:14',
    modified: 'system',
    created: 'admin1',
  }
]);

function selectTabFn() {
  tabsArray.value.map((item) => {
    if (item.id == tabSelected.value.id) {
      tabSelected.value = { ...item };
    }
  });
  console.log('tabsArray.value', tabsArray.value, tabSelected.value);
}

function addTabs() {
  console.log('addTabs');
  let BigId = Math.max(...tabsArray.value.map((item) => Number(item.id)));
  tabsArray.value.push({
    id: String(BigId + 1),
    name: 'New Tab',
    panes: 'pane4',
  });
  console.log('tabsArray.value', tabsArray.value, tabSelected.value);
}
function closeTab(closeId: string) {
  console.log('closeTab', closeId);
  ismediaData.value = false

  let indexToDelete = -1;
  tabsArray.value.find((item, ind) => {
    if (item.id == closeId) {
      console.log(closeId, item.id);
      indexToDelete = ind;
    }
  });
  if (indexToDelete > -1 && tabsArray.value.length - 1) {
    tabsArray.value.splice(indexToDelete, 1);
  }
  console.log('tabsArray.value', tabsArray.value);
}
function selectNoOfPanes() {
  console.log('selectNoOfPanes');
}
function log(event: any) {
  console.log(event);
}
function onDropCheck1(event: any) {
  console.log('onDropCheck1', event, droppedElement.value);
  if (droppedElement.value) {
    if (droppedElement.value[droppedElement.value.length - 1]?.title == 'Media') {
      ismediaData.value = true
    }
  }
  if (droppedElement.value) {
    if (droppedElement.value[droppedElement.value.length - 1]?.listFormat == 'Rundown') {
      isRundownPane1.value = true
    }
  }
}
function onDropCheck2(event: any) {
  console.log('onDropCheck1', event, droppedElement.value);
  if (droppedElement.value) {
    if (droppedElement.value[droppedElement.value.length - 1]?.listFormat == 'Rundown') {
      isRundownPane2.value = true
    }
  }
}
function onDropCheck3(event: any) {
  console.log('onDropCheck1', event, droppedElement.value);
  if (droppedElement.value) {
    if (droppedElement.value[droppedElement.value.length - 1]?.listFormat == 'Rundown') {
      isRundownPane3.value = true
    }
  }
}
function onDropCheck4(event: any) {
  console.log('onDropCheck1', event, droppedElement.value);
  if (droppedElement.value) {
    if (droppedElement.value[droppedElement.value.length - 1]?.listFormat == 'Rundown') {
      isRundownPane4.value = true
    }
  }
}
</script>

<style scoped>
.tabStyle {
  font-size: 14px;
  line-height: 1.715em;
  font-weight: 500;
}

.tabsParent {
  background-color: red;
}
</style>

<!-- <template>
  <q-page>
    <q-tabs
      v-model="tabs"
      dense
      :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
      align="justify"
      active-color="primary"
      style="width: 30vw"
    >
      <q-tab name="tab1" label="Tab1" style="border-right: 2px solid white" />
      <q-tab name="tab2" label="Tab2" />
      <q-btn icon="add" size="16px" style="padding: 5px" />
    </q-tabs>
    <q-tab-panels v-model="tabs">
      <q-tab-panel name="tab1">
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
      </q-tab-panel>
      <q-tab-panel name="tab2">tab panel 2</q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const splitterModel = ref(50); // start at 50%
const insideModel1 = ref(50);
const insideModel2 = ref(50);
const tabs = ref<string>('tab1');
</script> -->
