<template>
    <nav class="rwd-navbar bg-light text-center">
        <ul class="d-flex justify-content-between px-3 mb-0 py-2">
            <li class="d-felx flex-column">
                <router-link to="/">
                    <i class="bi bi-pencil-square"></i>
                    <p>記帳清單</p>
                </router-link>
            </li>
            <li>
                <router-link to="/account">
                    <i class="bi bi-piggy-bank-fill"></i>
                    <p>帳戶</p>
                </router-link>
            </li>
            <li>
                <router-link to="/add">
                    <i class="bi bi-plus-circle-fill"></i>
                </router-link>
            </li>
            <li>
                <router-link to="/analyze">
                    <i class="bi bi-bar-chart-fill"></i>
                    <p>圖表分析</p>
                </router-link>
            </li>
            <li>
                <i class="bi bi-translate"></i>
                <p>語言</p>
            </li>
        </ul>
    </nav>
</template>

<script lang="ts" setup>






</script>