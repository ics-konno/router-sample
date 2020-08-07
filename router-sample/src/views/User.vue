<template>
  <div class="user">
    <h1>User Name: {{ $route.params.id }}</h1>
    <p>
      <router-link :to="{ name: 'Profile' }">プロフィール</router-link> |
      <router-link :to="{ name: 'Setting' }">設定</router-link> |
    </p>
    <p>
      <router-link :to="{name: 'Complete'}">解約する</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>
