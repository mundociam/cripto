<template>
   <div class="flex justify-center">
       <bounce-loader :loading="isLoading" :color="'#F87171'" :size="100" />
      <px-table v-if="!isLoading" :assets="assets" />
    </div>
</template>

<script>
import PxTable from "@/components/PxTable";
import api from '@/api'

export default {
    name: "Home",
    components: {
        PxTable
    },

    data() {
        return {
        assets: [],
        isLoading:true
        }
    },
    created() {
        api
        .getAssets()
        .then(assets => (this.assets = assets))
        .finally(() => (this.isLoading = false))
    }
    
}

</script>