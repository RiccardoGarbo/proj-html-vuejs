<script>
export default {
    name: 'ButtonComponent',
    props: {
        buttonText: Object
    }
};
</script>

<template>
    <button :type="buttonText.type">{{ buttonText.label.toUpperCase() }}</button>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/_vars.scss' as *;

button {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 1px;
    border-radius: 0px;
    padding: 12px 54px 12px 54px;
    border: 1px solid $orange-cs;
    background-color: transparent;
    color: $white-cs;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: $orange-cs;
        color: white;
    }
}
</style> -