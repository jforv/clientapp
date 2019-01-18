<template>
<div>
<vue-cal selected-date="2018-11-19"
          xsmall
          :time-from="10 * 60"
          :disable-views="['years', 'year', 'day']"
          default-view="month"
          :events="events">
</vue-cal>
<vue-cal  
          :time-from="5 * 60"
          :time-step="15"
          :time-cell-height="18"
          default-view="week"
          :disable-views="['years', 'year']"
          :events="events">
  <div class="{ line: true, hours: !minutes }"
        slot="time-cell"
        slot-scope="{ hours, minutes }">
    <strong v-if="!minutes" style="font-size: 15px">{{ hours }}</strong>
    <span v-else style="font-size: 11px">{{ minutes }}</span>
  </div>
</vue-cal>
</div>
</template>

<script>

import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

export default{
  components: {VueCal},
  data: () => ({
  events: [
    {
      start: '2019-01-16 10:35',
      end: '2019-01-16 11:30',
      title: 'Doctor appointment',
      content: '<i class="v-icon material-icons">local_hospital</i>',
      class: 'health'
    },
    {
      start: '2019-01-16 12:35',
      end: '2019-01-16 13:30',
      title: 'Dentist appointment',
      content: '<i class="v-icon material-icons">local_hospital</i>',
      class: 'leisure'
    },
    {
     start: '2019-01-16 20:35',
      end: '2019-01-16 22:30',
      title: 'Crossfit',
      content: '<i class="v-icon material-icons">fitness_center</i>',
      class: 'sport'
    },
  ]
})
}
</script>
<style lang="scss">
$primary: #42b983;
$secondary: #2c3e50;
$lighter-text: #ccc;
.top-bar {
  z-index: 10;
  position: absolute;
  background: linear-gradient(rgba(255, 255, 255, 0.7)) !important;
  border-bottom: 1px solid transparent !important;
  transition: 0.3s ease-in-out all, 0.1s 0s ease-in-out border-color;
  top: 0;
  .v-toolbar__content {
    padding: 0;
  }
  h1 {
    height: 100%;
  }
  &__title {
    position: relative;
    overflow: visible;
    margin-left: auto !important;
    margin-right: auto !important;
    width: 15.5em;
    height: 100%;
    transition: 0.3s ease-in-out;
    font-size: 1em;
  }
  &__title-line {
    position: absolute;
    top: 50%;
    width: 130px;
    right: 100%;
    & + & {right: auto;left: 100%;}
    &:before, &:after {
      content: "";
      position: absolute;
      top: 0%;
      width: 100%;
      display: block;
      z-index: -1;
    }
    &:before {
      margin-top: -1px;
      border: 2px solid $primary;
    }
    &:after {
      margin-top: 5px;
      border: 1px solid $secondary;
    }
  }
  &__logo {
    position: relative;
    margin-right: 15px;
    vertical-align: middle;
    transition: 0.2s 0s ease-in-out;
    background-color: $primary;
    width: 38px;
    height: 36px;
    border-radius: 4px;
    display: inline-block;
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    opacity: 0.8;
    padding-top: 7px;
    font-family: impact, arial black, arial, sans-serif;
    transition: 0.4s 0.4s ease-in-out;
    transform: translate(3px, 3px) scale(0.9);
    box-shadow: 2px 2px 3px rgba(0, 0, 0, 0);
    &:before, &:after {
      content: '';
      position: absolute;
      top: 5px;
      width: 5px;
      height: 5px;
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
    }
    &:before {left: 5px;}
    &:after {right: 5px;}
    .ready & {
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.6);
      transform: translate(0, 0);
    }
  }
  &__logo-link {
    display: inline-flex;
    background-color: rgba(255, 255, 255, 0.7);
    height: 100%;
  }
  &__logo-title {
    display: inline-block;
    vertical-align: middle;
    transition: 0.3s ease-in-out;
    font-size: 32px;
  }
  &__logo-title:after {
    content: "*";
    position: absolute;
    top: 0;
    margin-left: -7px;
    line-height: 1;
    opacity: 1;
    transition: opacity 0.3s ease-in-out;
  }
  .top-bar__items {
    position: absolute;
    right: 0;
    transition: 0.3s ease-in-out;
    transform: translateX(100%);
    opacity: 0;
    background-color: rgba(255, 255, 255, 0.7);
  }
  .top-bar__items .v-menu__content .v-list__tile {
    height: 30px;
    font-size: 1em;
    color: inherit !important;
  }
  .intro {
    position: absolute;
    top: 3.4em;
    left: 86px;
    color: #999;
    opacity: 1;
    transform: translateY(0em);
    transition: 0.3s .4s ease-in-out, 0s 0s top;
    font: 12px Roboto, Tahoma, Geneva, sans-serif;
    border: none;
    text-align: left;
  }
  .intro:before {
    content: "* ";
    vertical-align: super;
  }
  .intro em {
    padding-top: 3px;
    opacity: 0.6;
    transition: 0.3s;
  }
  .intro em:hover {
    opacity: 0.9;
  }
  &.scrolled {
    transition: 0.6s ease-in-out all, 0.3s 0.5s ease-in-out border-color;
    border-bottom-color: $lighter-text !important;
    position: fixed;
    & .top-bar__title {
      width: 100%;
    }
    & .top-bar__logo-title {
      font-size: 0.9em;
    }
    & .top-bar__logo-title:after {
      opacity: 0;
    }
    & .top-bar__items {
      transition: 0.3s 0.3s ease-in-out all;
      transform: translateX(0%);
      opacity: 1;
    }
    .intro {
      transition: 0.2s 0s ease-in-out all, 0s 0.3s top;
      transform: translateY(1em);
      opacity: 0;
      top: 5em;
    }
  }
}
@media screen and (max-width: 600px) {
  .scrolled .top-bar__logo {
    transform: scale(0.7);
  }
  .top-bar.scrolled .v-toolbar__content,
  .scrolled .top-bar__logo-link {
    height: 32px !important;
  }
}
@media screen and (max-width: 449px) {
  .top-bar__items .v-btn {
    min-width: 50px;
    padding: 0 8px;
  }
  .top-bar__items a .v-btn__content span {
    display: none;
  }
}
</style>