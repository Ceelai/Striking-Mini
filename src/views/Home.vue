<template>
    <div class="home">
        <img alt="Striking Mini" src="../assets/logo.png" />
        <AppNavigation />
    </div>
</template>

<script>
// @ is an alias to /src
import AppNavigation from '@/components/AppNavigation.vue';

export default {
    name: 'Home',
    components: {
        AppNavigation
    }
};
</script>
