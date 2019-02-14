<template>
  <div>
    <vc-list pl pr>
      <vc-item>
        <svg-icon slot="left" class-name="test" icon-class="spinner3" />
        <vc-input v-model="test" clearable></vc-input>
      </vc-item>
      <vc-item>
        <svg-icon slot="left" class-name="test" icon-class="spinner3" />
        <vc-input placeholder="请输入密码" clearable></vc-input>
      </vc-item>
    </vc-list>
    <vc-list pl pr noborder>
      <vc-item>
        <label slot="left" class="test">手机号码</label>
        <div class="bd1 test-ct">
          <vc-input v-model="test" clearable></vc-input>
        </div>
      </vc-item>
      <vc-item>
        <label slot="left" class="test">服务密码</label>
        <div>
          <vc-input v-model="test" clearable></vc-input>
        </div>
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
      test: 213123
    }
  },
  components: {
    VcList,
    VcInput,
    VcItem
  }
}
</script>

<style lang="scss" scoped>
.test {
  color: #999;
  margin-right: 30px;
}
.test-ct {
  padding: 35px 0;
}
</style>
