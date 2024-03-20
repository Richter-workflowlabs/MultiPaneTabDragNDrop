<template>
  <q-page>
    <div>
      <q-splitter
        v-model="splitterModel"
        style="height: 90vh"
        separator-class="bg-orange"
        separator-style="width: 3px"
      >
        <template v-slot:before>
          <div class="q-pa-md">
            <div class="text-h4 q-mb-md">
              Same table Drag - quasar (table & drag)
            </div>
            <div class="q-my-md">
              <q-table
                bordered
                :rows="listTable"
                hide-pagination
                row-key="name"
                @drop="onDropTable"
              >
                <template v-slot:body="props">
                  <q-tr
                    :props="props"
                    :key="props.row.index"
                    :id="listTable[0].id"
                    draggable="true"
                    @dragstart="onDragStartTable($event, props.row.id)"
                  >
                    <q-td
                      v-for="col in props.cols"
                      :key="col.name"
                      :props="props"
                    >
                      {{ col.value }}{{ props.row.id }}
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </div>
          </div>
        </template>

        <template v-slot:after>
          <q-splitter
            v-model="insideModel"
            horizontal
            separator-class="bg-orange"
            separator-style="height: 3px"
            >1
            <template v-slot:before>
              <div class="q-pa-md">
                <div>
                  <div class="row no-wrap justify-around q-px-md q-pt-md">
                    <div
                      v-mutation="handler1"
                      @dragenter="onDragEnter"
                      @dragleave="onDragLeave"
                      @dragover="onDragOver"
                      @drop="onDrop($event)"
                      class="drop-target1 rounded-borders overflow-hidden"
                    >
                      <template v-for="item in listItems1" :key="item.id">
                        <div
                          :id="String(item.id)"
                          draggable="true"
                          @dragstart="onDragStart"
                          class="box"
                        >
                          {{ item.name }}
                        </div>
                      </template>
                    </div>
                    <br />

                    <div
                      v-mutation="handler2"
                      @dragenter="onDragEnter"
                      @dragleave="onDragLeave"
                      @dragover="onDragOver"
                      @drop="onDrop"
                      class="drop-target2 rounded-borders overflow-hidden"
                    >
                      <template v-for="item in listItems2" :key="item.id">
                        <div
                          :id="String(item.id)"
                          draggable="true"
                          @dragstart="onDragStart"
                          class="box"
                        >
                          {{ item.name }}
                        </div>
                      </template>
                    </div>
                  </div>

                  <div class="row justify-around items-start">
                    <div class="col row justify-center q-pa-md">
                      <div class="text-subtitle1">Mutation Info</div>
                      <div v-for="status in status1" :key="status">
                        {{ status }}
                      </div>
                    </div>

                    <div class="col row justify-center q-pa-md">
                      <div class="text-subtitle1">Mutation Info</div>
                      <div v-for="status in status2" :key="status">
                        {{ status }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </template>

            <template v-slot:after>
              <div class="q-pa-md">
                <div class="text-h4 q-mb-md">After</div>
                <div v-for="n in 20" :key="n" class="q-my-md">
                  {{ n }}. Lorem ipsum dolor sit, amet consectetur adipisicing
                  elit. Quis praesentium cumque magnam odio iure quidem, quod
                  illum numquam possimus obcaecati commodi minima assumenda
                  consectetur culpa fuga nulla ullam. In, libero.
                </div>
              </div>
            </template>
          </q-splitter>
        </template>
      </q-splitter>
    </div>
  </q-page>
</template>

<script setup lang="ts">
// import { Todo, Meta } from 'components/models';
import { ref } from 'vue';

const splitterModel = ref(50); // start at 50%
const insideModel = ref(50);
const listTable = ref([
  { id: 1, name: 'Abby', sport: 'basket' },
  { id: 2, name: 'Brooke', sport: 'foot' },
  { id: 3, name: 'Courtenay', sport: 'volley' },
  { id: 4, name: 'David', sport: 'rugby' },
]);
const listItems1 = ref([
  { id: 1, name: 'one item' },
  { id: 2, name: 'second item.' },
  { id: 3, name: 'third item.' },
  { id: 4, name: 'fourth item' },
]);
const listItems2 = ref([]);

function onDragStartTable(e: any, ind: any) {
  console.log('onDragStartTable', e, e.target.id, ind);

  e.dataTransfer.setData('text', e.target.id);
  e.dataTransfer.dropEffect = 'move';
}

function onDropTable(e: any) {
  console.log('onDropTable', e);
  e.preventDefault();

  // don't drop on other draggables
  if (e.target.draggable === true) {
    return;
  }

  const draggedId = e.dataTransfer.getData('text');
  const draggedEl: any = document.getElementById(draggedId);

  // check if original parent node
  if (draggedEl.parentNode === e.target) {
    e.target.classList.remove('drag-enter');
    return;
  }

  // make the exchange
  draggedEl.parentNode.removeChild(draggedEl);
  e.target.appendChild(draggedEl);
  e.target.classList.remove('drag-enter');
}

// new
const status1 = ref<any[]>([]);
const status2 = ref<any[]>([]);

function handler1(mutationRecords: any) {
  status1.value = [];
  for (const index in mutationRecords) {
    const record = mutationRecords[index];
    const info: any = `type: ${record.type}, nodes added: ${
      record.addedNodes.length > 0 ? 'true' : 'false'
    }, nodes removed: ${
      record.removedNodes.length > 0 ? 'true' : 'false'
    }, oldValue: ${record.oldValue}`;
    status1.value.push(info);
  }
}

function handler2(mutationRecords: any) {
  status2.value = [];
  for (const index in mutationRecords) {
    const record = mutationRecords[index];
    const info = `type: ${record.type}, nodes added: ${
      record.addedNodes.length > 0 ? 'true' : 'false'
    }, nodes removed: ${
      record.removedNodes.length > 0 ? 'true' : 'false'
    }, oldValue: ${record.oldValue}`;
    status2.value.push(info);
  }
}

// store the id of the draggable element
function onDragStart(e: any) {
  e.dataTransfer.setData('text', e.target.id);
  e.dataTransfer.dropEffect = 'move';
}

function onDragEnter(e: any) {
  // don't drop on other draggables
  // if (e.target.draggable !== true) {
  e.target.classList.add('drag-enter');
  // }
}

function onDragLeave(e: any) {
  e.target.classList.remove('drag-enter');
}

function onDragOver(e: any) {
  e.preventDefault();
}

function onDrop(e: any) {
  e.preventDefault();
  console.log('drooooooooooop', e.dataTransfer.getData('text'));

  // don't drop on other draggables
  // if (e.target.draggable === true) {
  //   return;
  // }

  const draggedId = e.dataTransfer.getData('text');
  const draggedEl: any = document.getElementById(draggedId);

  // check if original parent node
  if (draggedEl.parentNode === e.target) {
    e.target.classList.remove('drag-enter');
    return;
  }

  // make the exchange
  // draggedEl.parentNode.removeChild(draggedEl);
  // e.target.appendChild(draggedEl);

  const draggedItem = listItems1.value[draggedId - 1];

  listItems2.value.push(draggedItem);

  e.target.classList.remove('drag-enter');
}
</script>

<style scoped>
.drop-target1 {
  background-color: gainsboro;
  min-width: 20px;
  min-height: 20px;
}
.drop-target2 {
  background-color: gainsboro;
  min-width: 40px;
  min-height: 40px;
  height: fit-content;
}
.drag-enter {
  outline-style: dashed;
}
.box {
  padding: 20px;
  cursor: pointer;
}
</style>
