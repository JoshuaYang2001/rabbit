import XtxSkeleton from './xtx-skeleton.vue'
import XtxCarousel from './xtx-carousel.vue'
import xtxMore from "@/components/library/xtx-more";
export default {
  install (app) {
    app.component(XtxSkeleton.name, XtxSkeleton)
    app.component(XtxCarousel.name, XtxCarousel)
    app.component(xtxMore.name,xtxMore)
  }
}
