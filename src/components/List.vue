<template>
    
    <div>
            {{datas}}
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
@Component
export default class List extends Vue {
  @Prop()
  public data!: object;
  datas: any[];
  constructor() {
    super();
    this.datas = [];
  }
  @Watch("data")
  onDataChange() {
    this.datas.push(this.data);
  }
}
</script>

