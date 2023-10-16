<template>
  <header id="header" :class="{bb: isNotMain}">
    <div class="brand">
      <NuxtLink to="/">
        <IconBrand size="30"/>
      </NuxtLink>
    </div>
    <ul class="nav">
      <li class="nav-item">
        <button type="button" class="btn-blank">
          <IconSvgIcon variant="alert" size="24"/>
        </button>
      </li>
      <li class="nav-item">
        <button type="button" class="btn-blank" @click="handleToggleMenu">
          <IconSvgIcon :variant="variantType" size="24"/>
        </button>
      </li>
    </ul>
  </header>
</template>
<script setup>
import {useGnbStore} from "~/store/gnbState.js";

const gnbStore = useGnbStore();
const variantType = computed(() => gnbStore.isActive ? 'close' : 'menu');
import { watch, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from "~/components/icon/SvgIcon.vue";
import Brand from "~/components/icon/Brand.vue";

const emits = defineEmits(['toggle-menu']);

const handleToggleMenu = () => {
  gnbStore.toggle();
}

const router = useRouter()
let isNotMain = ref(false)
onMounted(() => {
  isNotMain.value = window.location.pathname !== '/'
})
watch(() => router, () => {
  isNotMain.value = router.options.history.location !== '/'
}, {deep: true})

</script>
<style scoped lang="scss">

#header {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  padding: 12px $grid-margin;
  background-color: $white;
  flex-wrap: wrap;
  align-items: center;
  z-index: $zi-fixed;

  .brand {
    display: flex;
    margin-right: auto;
  }
  &.bb {
    border-bottom: $border-bottom-between-header;
  }
}
</style>