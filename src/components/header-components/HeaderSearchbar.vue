<script>
export default {
  name: 'HeaderSearchbar',
  data() {
    return {
      isShown: false,
      searchedText: ''
    }
  },
  methods: {
    setOverlay() {
      this.isShown = this.isShown ? false : true
    },
    deleteText() {
      this.searchedText = ''
    }
  }
}
</script>

<template>
  <div class="search-icon"><img src="../../assets/img/image (8).svg" alt="lente" @click="setOverlay"></div>
  <div id="overlay" v-if="isShown">
    <img src="../../assets/img/image (22).svg" alt="close" id="close-button" @click="setOverlay">
    <div id="searchbar">
      <input type="text" placeholder="search ..." v-model="searchedText">
      <img src="../../assets/img/image (23).svg" class="searchbar-icon">
      <img v-if="searchedText" src="../../assets/img/image (22).svg" alt="delete" class="delete-text" @click="deleteText">
    </div>
  </div>
</template>

<style lang='scss' scoped>
@use '../../assets/scss/vars' as *;

.search-icon {
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(102%) contrast(103%);
  padding: 0 1rem;
  cursor: pointer;

  &:hover {
    filter: invert(52%) sepia(81%) saturate(1169%) hue-rotate(358deg) brightness(98%) contrast(93%);
  }
}

.searchbar-icon {
  height: 20px;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(102%) contrast(103%);
  padding: 0 1rem;
  cursor: pointer;
}

#overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #090c0ff6;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  #close-button {
    filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(304deg) brightness(102%) contrast(103%);
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 30px;
  }

  #searchbar {
  width: 800px;
  height: 66px;
  display: flex;
  align-items: center;
  border: 1px solid $white-cs;
  position: relative;

  &:focus-within {
    &::after {
      content: '';
      position: absolute;
      left: 100%;
      top: 8px;
      border: 3px solid $white-cs;
      height: 56px;
      display: block;
    }

    &::before {
      content: '';
      position: absolute;
      top: 100%;
      left: 8px;
      border: 3px solid $white-cs;
      width: 99%;
      display: block;
    }
  }

  input {
    width: 93%;
    height: 45px;
    background-color: transparent;
    border: 0;
    color: $white-cs;
    padding-left: 1rem;
    font-size: 1.3rem;
    font-family: sans-serif;

    &:focus-visible {
      outline: 0;
    }

    &::placeholder {
      color: rgba(194, 194, 194, 0.295);
    }
  }
  .delete-text {
    filter: invert(41%) sepia(6%) saturate(5486%) hue-rotate(180deg) brightness(89%) contrast(89%);
    position: absolute;
    right: 70px;
    height: 20px;
  }
}


}
</style>