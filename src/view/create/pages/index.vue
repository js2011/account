<template>
  <div class="account-create">
    <div class="part-1">
      <mt-field placeholder="请输入用户名" v-model="money"></mt-field>
      <mt-cell title="借款" icon="loan"  is-link @click.native="popupVisible = true"></mt-cell>
      <mt-popup
        class="jiekuan"
        v-model="popupVisible"
        position="bottom">
        <mt-picker :slots="slots" @change="onValuesChange" :visible-item-count="3"></mt-picker>      
      </mt-popup>
      <mt-cell :title="title" icon="calendar" is-link @click.native="$refs.picker.open();"></mt-cell>
      <mt-field label=" " icon="bianji" placeholder="备注..." v-model="remark"></mt-field>
      <mt-datetime-picker
        ref="picker"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="time">
      </mt-datetime-picker>
    </div>
    <div class="part-2">
      <mt-cell title="借款人/平台" value="配置名称" is-link></mt-cell>
      <mt-cell title="还款计划"><mt-switch v-model="open"></mt-switch></mt-cell>
    </div>
    <div class="part-3">
      <mt-cell title="还款方式" value="请选择还款方式" is-link></mt-cell>
      <mt-field label="还款金额" placeholder="如：100" type="number" v-model="money"></mt-field>
      <mt-field label="总期数" placeholder="请填写总期数" type="number" v-model="allTimes"></mt-field>
      <mt-field label="当前期数" placeholder="请填写当前期数" type="number" v-model="currentTime"></mt-field>
    </div>
    <div class="part-4">
      <mt-cell title="还款日期" icon="calendar" :value="value" is-link @click.native="$refs.picker2.open();"></mt-cell>
      <mt-cell title="还款提醒" value="提前一天" is-link></mt-cell>
      <mt-datetime-picker
        ref="picker2"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="huankuan">
      </mt-datetime-picker>
    </div>
    <div class="part-5">
      <mt-button type="primary" size="large">保存</mt-button>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import MtField from '../components/field'
import Card from "../widget/card";
export default {
  components: { Card, MtField },
  data() {
    return {
      money: 5000,
      slots: [
        {
          flex: 1,
          values: [
            "2015-01",
            "2015-02",
            "2015-03",
            "2015-04",
            "2015-05",
            "2015-06"
          ],
          className: "slot1",
          textAlign: "center"
        }
      ],
      time: void 0,
      remark: "",
      open: false,
      allTimes: "",
      currentTime: "",
      huankuan: void 0,
      popupVisible: false
    };
  },
  methods: {
    onValuesChange() {}
  },
  computed: {
    title() {
      return moment(this.time).format("YYYY年MM月DD日");
    },
    value() {
      return this.huankuan
        ? moment(this.huankuan).format("YYYY年MM月DD日")
        : "请选择每月还款日期";
    }
  }
};
</script>
<style scoped>
.part-1,
.part-2,
.part-3,
.part-4 {
  background: #fff;
  margin: 0.25rem 0;
  padding-left: 0.2rem;
}
.part-5 {
  padding: .3rem;
}
.jiekuan {
  width: 100%;
}
</style>
