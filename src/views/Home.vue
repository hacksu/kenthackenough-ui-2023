<template>
  <div class="home">
    <landing></landing>
    <!-- <about></about> -->
    <faqvirtual></faqvirtual>
    <virtual></virtual>
  </div>
</template>

<script>
// @ is an alias to /src
import Landing from '@/components/landing.vue';
import about from '@/components/about.vue';
import faq from '@/components/faq.vue';
import faqvirtual from '@/components/faq-virtual.vue';
import kentmap from '@/components/map.vue';
import virtual from '@/components/virtual.vue';

export default {
  name: 'home',
  components: {
    Landing,
    about,
    //faq,
    faqvirtual,
    //kentmap,
    virtual
  }
}
</script>

<style scoped lang="scss">

</style>
