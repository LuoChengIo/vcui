<template>
  <div class="page">
    <vc-list pl pr>
      <vc-item arrow>
        item
      </vc-item>
      <vc-item>
        item
        <i slot="right" class="icon icon-account_box"></i>
      </vc-item>
      <vc-item>
        <div slot="left" class="test-left">

        </div>
        <svg-icon icon-class="spinner"  />
        <svg-icon icon-class="spinner4" class-name="card-panel-icon" />
        <svg-icon  icon-class="spinner2" class-name="card-panel-icon" />
        <svg-icon icon-class="spinner3" class-name="card-panel-icon" />
        item
      </vc-item>
      <vc-item>
        <vc-input clearable placeholder="你好撒"></vc-input>
        <svg-icon slot="right" icon-class="message" class-name="card-panel-icon" />
      </vc-item>
    </vc-list>
  </div>
</template>

<script>
import VcInput from '@/vcui/components/input'
import VcList from '@/vcui/components/list'
import VcItem from '@/vcui/components/item'
export default {
  data() {
    return {

    }
  },
  components: {
    VcList,
    VcItem,
    VcInput
  }
}
</script>

<style lang='scss' scoped>
.page{
  padding: 20px 0;
}
.test-left{
  width: 55px;
  height: 55px;
  margin-right: 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  border-radius: 50%;
}
</style>
