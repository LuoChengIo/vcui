<template>
  <div>
    <vl-radio-group v-model="radio9">
      <vl-radio label="1">
        sadasdasda
      </vl-radio>
      <vl-radio label="2">
        sadasdasda
      </vl-radio>
    </vl-radio-group>
  </div>
</template>

<script>
import VlRadio from '@/vcui/components/radio'
import VlRadioGroup from '@/vcui/components/radio-group'
export default {
  data() {
    return {
      radio9: '1'
    }
  },
  components: {
    VlRadio,
    VlRadioGroup
  }
}
</script>

<style lang='scss' scoped>

 
</style>
