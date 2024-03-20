import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/IndexPage.vue') },
      { path: '/otherlib', component: () => import('pages/OtherLib.vue') },
      { path: '/VueDraggableNext', component: () => import('pages/VueDraggableNext.vue') },
      { path: '/DragInPanes', component: () => import('pages/DragInPanes.vue') },
      { path: '/TabsWithPanes', component: () => import('pages/TabsWithPanes.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
