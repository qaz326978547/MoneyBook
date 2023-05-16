<template>
    <nav class="my-3">
        <ul class="d-flex justify-content-between align-items-center px-3">
            <li><el-icon><i-ep-arrowLeftBold /></el-icon></li>
            <li>2023-05</li>
            <li><el-icon><i-ep-arrowRightBold /></el-icon></li>
        </ul>
    </nav>
    <div class="selectDate-nav mt-5 mb-3 mx-3">
        <ul class=" d-flex justify-content-between px-5 py-1 align-items-center">
            <li class="active">月</li>
            <li>日</li>
            <li>年</li>
            <li>全部</li>
            <li>自定義</li>
        </ul>
    </div>
    <div class="container">
        <div class="accountBook_wrap">
            <ul class="row  mx-2 budget_wrap ">
                <li class="col expenditure me-3">
                    <p>支出</p>
                    <p>NT$100</p>
                </li>
                <li class="col income">
                    <p>收入</p>
                    <p>NT$100</p>
                </li>
            </ul>
            <div class="budget my-3 d-flex align-items-center">
                <el-progress width="80" class="me-3" type="circle" :percentage="percentBudget" />
                <ul>
                    <li>預算 NT$ {{ budget }}</li>
                    <li class="badge bg-danger" v-if="cost > budget">超支 NT$ {{ cost }}</li>
                    <li class="badge bg-success" v-else="cost < budget">盈餘 NT$ {{ cost }}</li>
                </ul>
            </div>
        </div>
        <div class="records-index-wrap">
            <p class="mb-2">{{ date }}</p>
            <div class="records-index mb-2 d-flex align-items-center">
                <el-icon :size="24">
                    <i-ep-burger />
                </el-icon>
                <div class="w-100 records-index-content d-flex align-items-center justify-content-between">
                    <div>
                        <p>午餐</p>
                        <small>{{ recordTime }}</small>
                    </div>
                    <div>
                        <p>-NT$500</p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>

<script lang="ts" setup>
import { dayjs } from 'element-plus';


const budget = ref(10000)
const cost = ref(700)
const percentBudget = ref(0)
const setPercentBudget = () => {
    const remainingBudget = budget.value - cost.value
    percentBudget.value = Math.round((remainingBudget / budget.value) * 100)
}
onMounted(() => {
    setPercentBudget()
})

const recordTime = dayjs().format('HH:mm');
const date = dayjs().format('YYYY-MM-DD')





</script>