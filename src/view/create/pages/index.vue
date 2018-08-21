<template>
  <div class="account-create">
    <div class="part-1">
      <mt-field class="loan-input" placeholder="金额" type="number" v-model="loanMoney"></mt-field>
      <mt-cell title="借款" is-link @click.native="loanVisible = true">
        <span slot="icon">
          <i class="mintui mintui-loan icon"></i>
        </span>
      </mt-cell>
      <mt-cell :title="_loanTime" is-link @click.native="$refs.loanPicker.open();">
        <span slot="icon">
          <i class="mintui mintui-calendar icon"></i>
        </span>
      </mt-cell>
      <mt-field label="" placeholder="备注..." v-model="remark">
        <span slot="icon">
          <i class="mintui mintui-bianji icon"></i>
        </span>
      </mt-field>
    </div>
    <div class="part-2">
      <mt-cell title="借款人/平台" value="配置名称" is-link></mt-cell>
      <!-- <mt-cell title="还款计划"><mt-switch v-model="repaymentPlan"></mt-switch></mt-cell> -->
    </div>
    <div class="part-3">
      <!-- <mt-cell title="还款方式" value="请选择还款方式" is-link></mt-cell> -->
      <mt-field label="还款金额" placeholder="如：100" type="number" v-model="repaymentMoney"></mt-field>
      <mt-field label="总期数" placeholder="请填写总期数" type="number" v-model="repaymentNums"></mt-field>
      <mt-field label="当前期数" placeholder="请填写当前期数" type="number" v-model="currentNum"></mt-field>
    </div>
    <div class="part-4">
      <mt-cell title="还款日期" :value="_repaymentTime" is-link @click.native="$refs.repaymentPicker.open();"></mt-cell>
      <mt-cell title="还款提醒" :value="_remindTime" is-link  @click.native="remindVisible = true"></mt-cell>
    </div>
    <div class="part-5">
      <mt-button type="primary" size="large" @click="save">保存</mt-button>
    </div>
    <div class="part-6">
      <mt-popup
        class="loan"
        v-model="loanVisible"
        position="bottom">
        <mt-picker :slots="loanSlots" @change="onLoanChange" :visible-item-count="3"></mt-picker>      
      </mt-popup>
      <mt-datetime-picker
        ref="loanPicker"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="loanTime">
      </mt-datetime-picker>
      <mt-datetime-picker
        ref="repaymentPicker"
        type="date"
        year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"
        v-model="repaymentTime">
      </mt-datetime-picker>
      <mt-popup
        class="remind"
        v-model="remindVisible"
        position="bottom">
        <mt-picker :slots="remindSlots" @change="onRemindChange" :visible-item-count="3"></mt-picker>      
      </mt-popup>
    </div>
  </div>
</template>
<script>
import moment from "moment";
import MtField from "../components/field";
export default {
  components: { MtField },
  data() {
    return {
      loanMoney: "",
      loanSlots: [
        {
          flex: 1,
          values: ["借款", "收入"],
          className: "loan-slot",
          textAlign: "center"
        }
      ],
      loanTime: void 0,
      loanVisible: false,
      remark: "",
      repaymentPlan: false,
      repaymentMoney: "",
      repaymentNums: "",
      currentNum: "",
      repaymentTime: void 0,
      remindVisible: false,
      remindSlots: [
        {
          flex: 1,
          values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          className: "remind-slot",
          textAlign: "center"
        }
      ],
      remindTime: void 0
    };
  },
  methods: {
    onLoanChange(vm, value) {},
    onRemindChange(vm, value) {
      this.remindTime = value[0];
    },
    save() {
      let vm = this
      debugger
      this.$snc.fetch({
        url: 'http://res.txingdai.com/account/save',
        method: 'POST',
        referer: "http://sina.cn", 
        data: {
          totalBorrow: vm.loanMoney,
          type: 84,
          borrowDate: moment(vm.loanTime).format('YYYY-MM-DD'),
          memo: vm.remark,
          productId: 1,
          repaymentMoney: vm.repaymentMoney,
          totalPeriod: vm.repaymentNums,
          currentPeriod: vm.currentNum,
          date: moment(vm.repaymentTime).format('DD'),
          noticeDate: vm.remindTime,
          noteiceTime: '12:30'
        },
        success(res) {
          debugger
          if (res.code === 10200) {
            vm.$snc.URLNavigateTo({id: 'account', action: 'hybrid', title: '记账'})
          }
        }
      })
    }
  },
  computed: {
    _loanTime() {
      return moment(this.loanTime).format("YYYY年MM月DD日");
    },
    _repaymentTime() {
      return this.repaymentTime
        ? moment(this.repaymentTime).format("YYYY年MM月DD日")
        : "请选择每月还款日期";
    },
    _remindTime() {
      return `提前 ${this.remindTime} 天`;
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
  padding: 0.3rem;
}
.loan,
.remind {
  width: 100%;
}
.icon {
  padding-right: 0.3rem;
}
</style>
