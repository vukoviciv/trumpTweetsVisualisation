<template>
  <div class='header'>
    <div class='header-background'>
      <img :src='bannerUrl'>
    </div>

    <div class='header-profile-picture'>
      <div class='profile-picture-container'>
        <img :src='profilePictureUrl'>
      </div>
    </div>

    <div class='button-container'>
      <div class='twitter-button'>
        <a href='/tweets/update'>Get new tweets</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: {
    profilePictureUrl: {
      type: String,
      required: true
    },
    bannerUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  $max-width: 64rem;
  $background-color: #ffffff;

  @mixin transition-ease-out () {
    -webkit-transition: all .2s ease-out;
    -moz-transition: all .2s ease-out;
    -ms-transition: all .2s ease-out;
    -o-transition: all .2s ease-out;
    transition: all .2s ease-out;
  }

  .header {
    position: relative;
    max-width: $max-width;
    width: 100%;
    margin: 0 auto;

    .header-background img {
      width: 100%;
      border-radius: 0 0 2rem 2rem;
    }

    .header-profile-picture {
      position: absolute;
      left: -0.5rem;;
      bottom: -4rem;
      @include transition-ease-out();
      transform: scale(1);
    }
    .header-profile-picture  .profile-picture-container {
      position: relative;
      height: 12.5rem;
      width: 12.5rem;
      background: $background-color;
      border: .4rem solid $background-color;
      border-radius: 50%;

      @include transition-ease-out();

      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
</style>
