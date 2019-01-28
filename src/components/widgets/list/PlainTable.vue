<template>
<v-card>
<v-toolbar card dense color="transparent">
      <v-toolbar-title><h4>Patient List</h4></v-toolbar-title>
       <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
     <v-card-text class="pa-0">
      <template>

  <v-data-table
    :headers="headers"
    :items="Patients"
    item-key="name"
    :search="search"
  >
    <template slot="items" slot-scope="props">
      <tr @click="props.expanded = !props.expanded">
        <td>
          <v-avatar size="32">
                      <img :src="props.item.protein" alt="avatar">
                    </v-avatar> 
                    
        </td>
        <td class="text-xs-right">{{ props.item.calories }}</td>
        <td class="text-xs-right">{{ props.item.fat }}</td>
        <td class="text-xs-right">{{ props.item.carbs }}</td>
        <td class="text-xs-right">{{ props.item.protein }}</td>
        <td class="text-xs-right">{{ props.item.iron }}</td>
        
      </tr>
    </template>
    <template slot="expand" slot-scope="props">
      <v-card flat>
        {{props.item.sugar}}
        <template>
        <v-data-table
          :headers="headers"
          :items="projects"
          hide-actions
          hide-headers
          class="elevation-0"
        >
          <template v-if="false" slot="items" slot-scope="props">
            <td>
              <!-- <v-avatar size="36px">
                <img :src="props.item.avatar" :alt="props.item.username" />
              </v-avatar> -->
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
          </template>
        </v-data-table>
        </template>
        
      </v-card>
    </template>
    <v-alert slot="no-results" :value="true" color="error" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
  </v-data-table>
  </template>
  </v-card-text>
  </v-card>
</template>

<script>
import { Projects } from '@/api/project';
export default {
    data () {
      return {
        search: '',
        headers: [
          {
            text: 'Name',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Value', value: 'calories' },
          { text: 'Heart', value: 'fat' },
          { text: 'Mass', value: 'carbs' },
          { text: 'Colesterol', value: 'protein' },
          { text: 'Sugar', value: 'iron' }
        ]
      }
    },
    computed: {
      users () {
        return getUser();
    },
      projects () {
        return Projects;
    }
  }
  }
</script>

<style>
td,.text-xs-right{
  text-align: center !important;
}
</style>
