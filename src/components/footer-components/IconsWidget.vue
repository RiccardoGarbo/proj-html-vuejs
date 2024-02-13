//TODO: Fix visualization icons
<script>
export default {
    name: 'IconsWidget',
    data() {
        return {
            images: [
                { filename: 'image(17).svg', alt: 'icon 1' },
                { filename: 'image(18).svg', alt: 'icon 2' },
                { filename: 'image(19).svg', alt: 'icon 3' },
                { filename: 'image(20).svg', alt: 'icon 4' }
            ]
        };
    },
    methods: {
        getImagePath(filename) {
            const basePath = '@/assets/img/';
            return `${basePath}${filename}`;
        }
    }
};
</script>

<template>
    <div id="widget-icon">
        <ul>
            <li v-for="(image, i) in images" :key="i">
                <a href="#"><img :src="getImagePath(image.filename)" :alt="image.alt"></a>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
@use '@/assets/scss/_vars.scss' as *;

ul {
    display: flex;
    margin-top: 20px;
}

li {
    margin: 0 5px;
}

a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
        color: $orange-cs;
    }
}

.filtered-image {
    filter: grayscale(100%);
}
</style>
