<template>
    <nav class="my-3">
        <ul class="d-flex justify-content-between align-items-center px-3">
            <li><el-icon><i-ep-arrowLeftBold /></el-icon></li>
            <li>2023-05</li>
            <li><el-icon><i-ep-arrowRightBold /></el-icon></li>
        </ul>
    </nav>
    <div class="selectDate-nav my-5 mx-3">
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
            <ul class="row budget_wrap justify-content-center">
                <li class="col-5 expenditure">
                    <p>支出</p>
                    <p>NT$100</p>
                </li>
                <li class="col-5 income">
                    <p>收入</p>
                    <p>NT$100</p>
                </li>
            </ul>
        </div>

    </div>
</template>

<script lang="ts" setup>


</script>