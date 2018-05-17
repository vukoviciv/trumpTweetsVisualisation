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
