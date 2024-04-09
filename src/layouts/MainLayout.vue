<template>
  <q-layout view="lHh Lpr lFf">
    <!-- <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header> -->

    <!-- <div>
      <q-splitter
        v-model="splitterModel"
        style="height: 100%"
        separator-class="bg-red"
        separator-style="width: 3px"
      >
        <template v-slot:before> -->
    <div class="absolute" style="left: 0;top: 0;z-index: 20;"><q-icon name="keyboard_arrow_left"
        @click="toggleLeftDrawer" style="cursor: pointer;" /></div>
    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <div class="absolute"><q-icon name="keyboard_arrow_left" @click="toggleLeftDrawer" /></div>
      <q-list>
        <q-item-label header class="cursor-pointer">
          <span @click="gotoPages">Available Pages</span> |
          <span @click="gotoMedias">Media Info</span>
        </q-item-label>

        <!-- pages -->
        <draggable class="dragArea list-group w-full" :list="Pages" :sort="false" group="mediaDrop" tag="div"
          @change="log" v-if="isPages">
          <q-item-section v-for="page in Pages" :key="page.id" @click="onclickHandle(page.title)"
            style="cursor: pointer; padding: 5px">
            <div v-show="page.title != 'RunDown'">
              <q-icon :name="page.icon" />
              {{ page.title }}
            </div>
            <!-- Rundown -->
            <div v-show="page.title == 'RunDown'" class="styleChangeItem">
              <q-expansion-item dense-toggle switch-toggle-side expand-separator :label="page.title">
                <q-card>
                  <q-card-section>
                    <q-list>
                    <draggable class="dragArea list-group w-full" :list="rundownList" :sort="false" group="mediaDrop"
                      tag="div" @change="log">
                        <q-item v-for="RundownItem in rundownList" :key="RundownItem.id">
                          <q-item-section>
                            <q-item-label lines="2">{{ RundownItem.title }}</q-item-label>
                            <q-item-label caption lines="1">{{ RundownItem.date }}</q-item-label>
                          </q-item-section>

                          <q-item-section side top>
                            <q-item-label caption>{{ RundownItem.timeDuration }}</q-item-label>
                            <q-icon name="square" color="yellow" />
                          </q-item-section>
                        </q-item>
                      </draggable>
                    </q-list>
                  </q-card-section>
                </q-card>
              </q-expansion-item>
            </div>
          </q-item-section>
        </draggable>

        <!-- media listing section -->
        <!-- :group="{ name: 'TableGrp', pull: 'clone', put: false }" -->
        <!-- group="TableGrp" -->
        <!-- :sort="false"   -->
        <q-item-section style="cursor: pointer; padding: 5px" v-if="!isPages">
          <q-list bordered>
            <draggable class="dragArea list-group w-full" :list="mediaData"
              :group="{ name: 'TableGrp', pull: 'clone', put: false }" tag="div" @change="log">
              <q-item clickable v-ripple v-for="item in mediaData" :key="item.id" style="max-width: 280px"
                class="rounded-borders">
                <q-item-section avatar>
                  <img :src="item.imageSrc" style="width: 50px; height: 50px; border-radius: 5px" />
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
        </q-item-section>
      </q-list>
    </q-drawer>
    <!-- </template> -->

    <!-- <template v-slot:after> -->
    <q-page-container>
      <router-view />
    </q-page-container>
    <!-- </template> -->
    <!-- </q-splitter>
    </div> -->
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VueDraggableNext as draggable } from 'vue-draggable-next';
// import EssentialLink, {
//   EssentialLinkProps,
// } from 'components/EssentialLink.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const Pages = ref([
  {
    title: 'Tabs With Panes',
    caption: 'Tabs With Panes',
    icon: 'chat',
    id: 51,
  },
  {
    title: 'Drag In Panes',
    caption: 'Drag In Panes',
    icon: 'record_voice_over',
    id: 52,
  },
  {
    title: 'vue-draggable-next',
    caption: 'vue-draggable-next',
    icon: 'rss_feed',
    id: 53,
  },
  {
    title: 'Home',
    caption: 'Home',
    icon: 'public',
    id: 54,
  },
  {
    title: 'Other Library',
    caption: 'drag and drop',
    icon: 'favorite',
    id: 55,
  },
  {
    title: 'Media',
    caption: 'Media',
    icon: 'movie',
    id: 56,
  },
  {
    title: 'RunDown',
    caption: 'RunDown',
    icon: 'movie',
    id: 56,
  },
]);

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
const rundownList = ref([
  {
    title: '14_09_2021 Bulletin',
    date: '14/9/2021',
    timeDuration: '00:00:51',
    listFormat: 'Rundown',
    id: 41,
  },
  {
    title: '15_08_2022 Bulletin',
    date: '15/8/2022',
    timeDuration: '00:01:21',
    listFormat: 'Rundown',
    id: 42,
  },
  {
    title: '19_09_2021 Bulletin',
    date: '19/9/2021',
    timeDuration: '00:00:44',
    listFormat: 'Rundown',
    id: 43,
  },
  {
    title: '22_03_2021 Bulletin',
    date: '22/3/2021',
    timeDuration: '00:03:28',
    listFormat: 'Rundown',
    id: 44,
  },
  {
    title: '03_07_2022 Bulletin',
    date: '03/7/2022',
    timeDuration: '00:28:37',
    listFormat: 'Rundown',
    id: 45,
  },
  {
    title: '15_12_2024 Bulletin',
    date: '15/12/2024',
    timeDuration: '00:30:00',
    listFormat: 'Rundown',
    id: 46,
  },
])

const leftDrawerOpen = ref(false);
// const splitterModel = ref(30); // start at 50%
const isPages = ref(true);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
function onclickHandle(title: string) {
  console.log('onclickHandle', title);

  if (title == 'Other Library') {
    console.log('title', title);
    router.push({ path: '/otherlib' });
  } else if (title == 'Home') {
    console.log('title', title);
    router.push({ path: '/' });
  } else if (title == 'vue-draggable-next') {
    console.log('title', title);
    router.push({ path: '/VueDraggableNext' });
  } else if (title == 'Drag In Panes') {
    console.log('title', title);
    router.push({ path: '/DragInPanes' });
  } else if (title == 'Tabs With Panes') {
    console.log('title', title);
    router.push({ path: '/TabsWithPanes' });
  }
}

function gotoPages() {
  console.log('gotoPages');
  isPages.value = true;
}
function gotoMedias() {
  console.log('gotoMedias');
  isPages.value = false;
}

function log(event: any) {
  console.log('evvvvvv', event);
}
</script>

<style>
.styleChangeItem .q-item {
  padding-left: 0px;
}

.styleChangeItem .q-item__section--side {
  padding-right: 0px;
}

.styleChangeItem .q-item__section--avatar {
  min-width: 0px;
}
</style>
