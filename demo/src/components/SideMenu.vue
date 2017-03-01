<template lang="pug">
div
  a#menuLink.menu-link(href='#menu')
    // Hamburger icon
    span
  #menu
    .pure-menu
      a.pure-menu-heading(href='') Paliari
      ul.pure-menu-list
        li.pure-menu-item
          router-link.pure-menu-link.ellipsis(to='/home') Get Started
        li.pure-menu-item
          router-link.pure-menu-link.ellipsis(to='/components') Components
          ul.sublist
            li
              router-link.pure-menu-link.ellipsis(to='/components/checkbox') Checkbox
            li
              router-link.pure-menu-link.ellipsis(to='/components/ios-switch') Ios Switch
            li
              router-link.pure-menu-link.ellipsis(to='/components/radio') Radio
            li
              router-link.pure-menu-link.ellipsis(to='/components/load-manager') Load Manager
            li
              router-link.pure-menu-link.ellipsis(to='/components/list-manager') List Manager
            li
              router-link.pure-menu-link.ellipsis(to='/components/spinner') Spinner
            li
              router-link.pure-menu-link.ellipsis(to='/components/back') Back Button
            li
              router-link.pure-menu-link.ellipsis(to='/components/modal') Modal
        li.pure-menu-item
          router-link.pure-menu-link.ellipsis(to='/directives') Directives
          ul.sublist
            li
              router-link.pure-menu-link.ellipsis(to='/directives/deep-key') Deep Key
            li
              router-link.pure-menu-link.ellipsis(to='/directives/translate') Translate
            li
              router-link.pure-menu-link.ellipsis(to='/directives/t-model') T Model
            li
              router-link.pure-menu-link.ellipsis(to='/directives/text-bind') Text Bind
        li.pure-menu-item
          router-link.pure-menu-link.ellipsis(to='/filters') Filters
          ul.sublist
            li
              router-link.pure-menu-link.ellipsis(to='/filters/currency') Currency
            li
              router-link.pure-menu-link.ellipsis(to='/filters/date') Date
            li
              router-link.pure-menu-link.ellipsis(to='/filters/deep-key') Deep Key
            li
              router-link.pure-menu-link.ellipsis(to='/filters/translate') Translate
            li
              router-link.pure-menu-link.ellipsis(to='/filters/enums') Enums
            li
              router-link.pure-menu-link.ellipsis(to='/filters/t-model') T Model
            li
              router-link.pure-menu-link.ellipsis(to='/filters/truncate') Truncate
            li
              router-link.pure-menu-link.ellipsis(to='/filters/masks') Masks
        li.pure-menu-item
          router-link.pure-menu-link.ellipsis(to='/utils') Utils
          ul.sublist
            li
              router-link.pure-menu-link.ellipsis(to='/utils/deep-clone') Deep Clone
            li
              router-link.pure-menu-link.ellipsis(to='/utils/deep-key') Deep Key
            li
              router-link.pure-menu-link.ellipsis(to='/utils/i18n') I18n
            li
              router-link.pure-menu-link.ellipsis(to='/utils/is-date') Is Date
            li
              router-link.pure-menu-link.ellipsis(to='/utils/uc-first') Uc First
            li
              router-link.pure-menu-link.ellipsis(to='/utils/masks') Masks
</template>

<script>
export default {
}
</script>

<style lang="stylus">

</style>
