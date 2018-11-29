
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import WithRender from './list.html';
@WithRender
@Component
export default class List extends Vue {
  @Prop()
  public data!: object;
  datas: any[];
  constructor() {
    super();
    this.datas = [];
    console.log(this.datas);
  }
  @Watch("data")
  onDataChange() {
    this.datas.push(this.data);
  }
}


