<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <!-- <div>
      <q-splitter
        v-model="splitterModel"
        style="height: 100%"
        separator-class="bg-red"
        separator-style="width: 3px"
      >
        <template v-slot:before> -->
          <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
            <q-list>
              <q-item-label header> Essential Links </q-item-label>

              <q-item-section
                v-for="link in essentialLinks"
                :key="link.title"
                @click="onclickHandle(link.title)"
                style="cursor: pointer; padding: 5px"
              >
                <div>
                  <q-icon :name="link.icon" />
                  {{ link.title }}
                </div>
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
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev',
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework',
  },
  {
    title: 'Tabs With Panes',
    caption: 'Tabs With Panes',
    icon: 'chat',
  },
  {
    title: 'Drag In Panes',
    caption: 'Drag In Panes',
    icon: 'record_voice_over',
  },
  {
    title: 'vue-draggable-next',
    caption: 'vue-draggable-next',
    icon: 'rss_feed',
  },
  {
    title: 'Home',
    caption: 'Home',
    icon: 'public',
  },
  {
    title: 'Other Library',
    caption: 'drag and drop',
    icon: 'favorite',
  },
];

const leftDrawerOpen = ref(false);
// const splitterModel = ref(30); // start at 50%

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
</script>
