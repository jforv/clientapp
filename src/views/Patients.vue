<template>
<v-card>
    <plain-table></plain-table>
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>
</v-card>
</template>

<script>
import PlainTable from "@/components/widgets/list/PlainTable";
export default {
  components: {PlainTable},
  data () {
    return {
      basic: {
        dialog: false
      }
    }
  }

}
</script>

<style>

</style>
