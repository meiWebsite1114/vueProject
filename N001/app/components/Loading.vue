<script setup></script>
<template>
  <section>
    <svg width=" 60" height="60" viewBox="0 0 50 50" class="mx-auto">
      <rect x="15" y="15" width="20" height="20" fill="#f9be0e">
        <animateTransform attributeName="transform" type="rotate" from="0 25 25" to="360 25 25" dur="1.5s"
          repeatCount="indefinite"></animateTransform>
        <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"></animate>
      </rect>
    </svg>
  </section>
</template>
<style scoped></style>
