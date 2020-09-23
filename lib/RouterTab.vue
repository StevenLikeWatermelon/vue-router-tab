<template>
  <div class="router-tab">
    <!-- 页签头部 -->
    <header ref="header" class="router-tab__header">
      <div class="router-tab__slot-start">
        <slot name="start" />
      </div>

      <tab-scroll ref="scroll">
        <!-- 页签列表 -->
        <transition-group
          tag="ul"
          class="router-tab__nav"
          v-bind="tabTrans"
          @after-enter="onTabTrans"
          @after-leave="onTabTrans"
        >
          <tab-item
            v-for="(item, index) in items"
            :key="item.id || item.to"
            ref="tab"
            :data="item"
            :index="index"
            @contextmenu.native.prevent="
              e => showContextmenu(item.id, index, e)
            "
          >
            <template v-if="$scopedSlots.default" #default="scope">
              <slot v-bind="scope" />
            </template>
          </tab-item>
        </transition-group>
      </tab-scroll>

      <div class="router-tab__slot-end">
        <slot name="end" />
      </div>
    </header>

    <!-- 页面容器 -->
    <div class="router-tab__container">
      <Split class="xl-split-panel">
        <SplitArea
          id="splitArea"
          :size="100"
          :min-size="0"
          class="content-split"
        >
          <div class="content-split-left">
            <router-alive
              page-class="router-tab-page"
              :keep-alive="keepAlive"
              :reuse="reuse"
              :max="maxAlive"
              :transition="pageTrans"
              @ready="onAliveReady"
              @change="onAliveChange"
            />

            <!-- iframe 页面 -->
            <transition-group
              v-bind="pageTrans"
              tag="div"
              class="router-tab__iframes"
            >
              <iframe
                v-for="url in iframes"
                v-show="url === currentIframe"
                :key="url"
                :src="url"
                :name="iframeNamePrefix + url"
                frameborder="0"
                class="router-tab__iframe"
                @load="iframeLoaded(url)"
              />
            </transition-group>
          </div>
        </SplitArea>
        <SplitArea :size="0" :min-size="0">
          <div
            class="drop-iframe"
            @dragover.prevent="changeBackground"
            @dragleave.prevent="resetBackground"
            @drop.prevent="onsplitDrop"
          >
            <iframe
              v-show="hasSplitDropped"
              :key="currentDraggledIframe"
              :src="currentDraggledIframe"
              :name="iframeNamePrefix + currentDraggledIframe"
              frameborder="0"
              class="router-tab__iframe"
              @load="iframeLoaded(currentDraggledIframe)"
            />
          </div>
        </SplitArea>
      </Split>
    </div>

    <!-- 右键菜单 -->
    <transition name="router-tab-zoom">
      <tab-contextmenu
        v-if="contextmenu !== false && contextData.index > -1"
        :data="contextData"
        :menu="contextMenu"
      />
    </transition>
  </div>
</template>

<script src="./RouterTab.js"></script>

<style lang="scss" scoped>
.xl-split-panel {
  width: 100%;
  height: 100%;
}
.content-split {
  position: relative;
}
.content-split-left {
  width: 100%;
  height: 100%;
  position: relative;
}
.drop-iframe {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

<style lang="scss">
.gutter.gutter-horizontal {
  background-color: rgba(66, 185, 131, 0.2);
}
</style>
