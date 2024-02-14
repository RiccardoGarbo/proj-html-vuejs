<script>
export default {
    name: "GalleryCard",
    props: {
        gal: Object,
        span: String,
    },
    computed: {
        upperText() {
            return this.gal.text.toUpperCase();
        }
    },

    methods: {
        imgPath(img) {
            const url = new URL(`../../assets/img/${img}`, import.meta.url);
            return url.href;
        },
    }
};
</script>

<template>
    <div class="gallery-card">
        <div class="text">
            <img :src="imgPath(gal.img)" :alt="gal.text">
            <h4>{{ upperText }}</h4>
        </div>
        <div class="icons">
            <span>{{ span }}</span>
            <i class="fa-brands fa-spotify" style="color: #ffffff;"></i>
            <i class="fa-brands fa-youtube" style="color: #ffffff;"></i>
            <i class="fa-solid fa-music" style="color: #ffffff;"></i>
            <i class="fa-solid fa-cloud" style="color: #ffffff;"></i>
            <i class="fa-solid fa-compass" style="color: #ffffff;"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped >
h4 {
    font-size: 1.8rem;
}

span {
    color: #CCCCCC;
}

.icons {
    text-align: center;

    i {
        margin: 0 5px;
    }
}

.text {
    text-align: center;
}
</style>