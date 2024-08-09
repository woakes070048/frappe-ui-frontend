<template>
  <Button @click="showDialog = true">Open Dialog</Button>
  <Dialog title="Title" v-model="showDialog"> Dialog content </Dialog>
</template>

<script>
import { Dialog } from 'frappe-ui'

export default {
  name: 'Home',
  data() {
    return {
      showDialog: false,
    }
  },
  components: {
    Dialog,
  },
}
</script>
