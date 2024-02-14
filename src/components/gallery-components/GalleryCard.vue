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
            <figure>
                <img :src="imgPath(gal.img)" :alt="gal.text">
            </figure>
            <h4>{{ upperText }}</h4>
        </div>
        <div class="icons">
            <span>{{ span }}</span>
            <i class="fa-brands fa-spotify"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-solid fa-music"></i>
            <i class="fa-solid fa-cloud"></i>
            <i class="fa-solid fa-compass"></i>
        </div>
    </div>
</template>

<style lang="scss" scoped >
@use '@/assets/scss/_vars.scss' as *;

h4 {
    font-size: 1.8rem;
}

span {
    color: #CCCCCC;
}

.icons {
    text-align: center;

    i {
        color: $white-cs;
        text-decoration: none;
        transition: color 0.3s ease;
        margin: 0 5px;

        &:hover {
            color: $orange-cs;
        }
    }


}

figure {
    overflow: hidden;
    width: 447px;
    height: 415px;
    margin-bottom: 1rem;

    img {
        transition: scale 0.7s ease;

        &:hover {
            scale: 1.1;
        }
    }

}


.text {
    text-align: center;
}
</style>