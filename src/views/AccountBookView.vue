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
            <div class="budget mt-3 d-flex align-items-center">
                <el-progress class="me-3" type="circle" :percentage="percentBudget" />
                <ul>
                    <li>預算 NT$ {{ budget }}</li>
                    <li class="badge bg-danger" v-if="cost > budget">超支 NT$ {{ cost }}</li>
                    <li class="badge bg-success" v-else="cost < budget">盈餘 NT$ {{ cost }}</li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>

const budget = ref(1300)
const cost = ref(700)
const percentBudget = Math.round((cost.value / budget.value) * 100)

</script>