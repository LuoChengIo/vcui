<template>
  <div class="pd40">
    <h1 >上拉加载</h1>
    <div class="item">
      <scroller lock-x scrollbar-y use-pullup height="200px" @on-pullup-loading="load1" ref="demo1"
      :pullup-config="{loadingContent: 'Loading...'}">
        <div class="box">
          <p v-for="i in n1" :key="i">placeholder {{i}}</p>
        </div>
      </scroller>
    </div>
    <h1 >v-model上拉加载</h1>
    <div class="item">
      <scroller lock-x scrollbar-y use-pullup :pullup-config="pullupConfig" height="200px" ref="demo3" @on-pullup-loading="load3" v-model="demo3Value">
        <div class="box2">
          <p v-for="i in n3" :key="i">占位 {{i}}</p>
        </div>
      </scroller>
    </div>
    <h1 >上拉加载 自定义模版样式</h1>
    <div class="item">
      <scroller lock-x scrollbar-y use-pullup height="200px" v-model="demo4Value" @on-pullup-loading="load4">
        <!--content slot-->
        <div class="box2">
          <p v-for="i in n4" :key="i">placeholder {{i}}</p>
          <div v-if="demo4Value.pullupStatus === 'disabled'">我是底线</div>
        </div>
        <!--pullup slot-->
        <div slot="pullup" class="xs-plugin-pullup-container xs-plugin-pullup-up" style="position: absolute; width: 100%; height: 40px; bottom: -40px; text-align: center;">
          <span v-show="demo4Value.pullupStatus === 'default'">213213</span>
          <span class="pullup-arrow" v-show="demo4Value.pullupStatus === 'default' || demo4Value.pullupStatus === 'up' || demo4Value.pullupStatus === 'down'" :class="{'rotate': demo4Value.pullupStatus === 'down'}">↑</span>
          <span v-show="demo4Value.pullupStatus === 'loading'">加载中</span>
        </div>
      </scroller>
    </div>
    <h1 >下拉刷新</h1>
    <div class="item">
      <scroller lock-x scrollbar-y use-pulldown :pulldown-config="{content:'下拉刷新',downContent:'下拉刷新',upContent:'释放刷新',loadingContent:'加载中'}" height="200px" @on-pulldown-loading="loadc" v-model="status">
        <div class="box2">
          <p v-for="i in 80" :key="i">占位 {{i}}</p>
        </div>
      </scroller>
    </div>
    <h1 >不带滚动条的水平滚动，</h1>
    <div class="item">
        <scroller lock-y :scrollbar-x=false>
          <div class="box1">
            <div class="box1-item" v-for="i in 7" :key="i"><span>{{' ' + i + ' '}}</span></div>
          </div>
        </scroller>
    </div>

  </div>
</template>

<script>
/** 该组件引入了vux-xscroll 具体api http://xscroll.github.io/ */
import scroller from '@/vcui/components/scroller'
export default {
  data() {
    return {
      n1: 10,
      n3: 10,
      n4: 10,
      status: {
        pulldownStatus: 'default'
      },
      demo4Value: {
        pullupStatus: 'default'
      },
      demo3Value: {
        pullupStatus: ''
      },
      pullupConfig: {
        content: '上拉加载更多',
        downContent: '松开进行加载',
        upContent: '上拉加载更多',
        loadingContent: '加载中...'
      }
    }
  },
  components: {
    scroller
  },
  methods: {
    load1() {
      setTimeout(() => {
        this.n1 += 10
        setTimeout(() => {
          this.$refs.demo1.donePullup()
        }, 100)
      }, 2000)
    },
    load3() {
      setTimeout(() => {
        this.n3 += 10
        setTimeout(() => {
          this.demo3Value.pullupStatus = 'default'
        }, 100)
        console.log('demo3value', JSON.stringify(this.demo3Value))
        if (this.n3 === 30) { // unload plugin
          setTimeout(() => {
            this.demo3Value.pullupStatus = 'disabled'
          }, 100)
        }
      }, 2000)
    },
    load4() {
      setTimeout(() => {
        this.n4 += 10
        setTimeout(() => {
          this.demo4Value.pullupStatus = 'default'
        }, 10)
        if (this.n4 === 30) { // unload plugin
          setTimeout(() => {
            this.demo4Value.pullupStatus = 'disabled'
          }, 100)
        }
      }, 2000)
    },
    loadc() {
      setTimeout(() => {
        this.status.pulldownStatus = 'default'
      }, 2000)
    }
  }
}
</script>

<style lang='scss' scoped>
.item{
  background-color: #fff;
}
.box1 {
  height: 100px;
  position: relative;
  width: 1490px;
}
.box1-item {
  width: 200px;
  height: 100px;
  background-color: #ccc;
  display:inline-block;
  margin-left: 15px;
  float: left;
  text-align: center;
  line-height: 100px;
}
.box1-item:first-child {
  margin-left: 0;
}
</style>
