<template>
  <v-card>
    <v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Patient List</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template slot="items" slot-scope="props">
        <v-data-table
          :headers="headers"
          :items="projects"
          hide-actions
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <tr @click="props.expanded = !props.expanded">
            <td>
              <v-avatar size="36px">
                <img :src="props.item.avatar" :alt="props.item.username" />
              </v-avatar>
            </td>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.deadline }}</td>
            <td class="text-xs-left"><v-progress-linear :value="props.item.progress" height="5" :color="props.item.color"></v-progress-linear> </td>
            <td class="text-xs-right">
              <v-btn flat icon color="grey">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn flat icon color="grey">
                <v-icon>delete</v-icon>
              </v-btn>
            </td>
            </tr>
          </template>
          <template slot="expand">
      <v-card flat>
        <v-card-text>Historial va aqui</v-card-text>
      </v-card>
    </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import { Projects } from '@/api/project';
export default {
  data () {
    return {
      headers: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'avatar'
        },
        {
          text: 'Name',
          align: 'left',
          value: 'name'
        },
        { text: 'Deadline', value: 'deadline' },
        { text: 'Progress', value: 'progress' },
        { text: 'Action', value: 'action', align: 'right' },

      ],
    };
  },
  computed: {
    projects () {
      return Projects;
    }
  }
};
</script>
<style scoped>
.pa-0{
  margin: 50px;
  padding: 50px;
}
</style>
