V = (name) -> require "views/#{name}.vue"

module.exports = [
    name: 'home'
    path: '/home'
    alias: '/'
    component: V 'Home'
    meta: title: 'Acesso Cidadão'
  ,
    name: 'components'
    path: '/components'
    component: V 'components/Home'
    children: [
      name: 'checkbox'
      path: 'checkbox'
      component: V 'components/Checkbox'
      meta: title: 'Checkbox'
    ,
      name: 'ios-switch'
      path: 'ios-switch'
      component: V 'components/IosSwitch'
      meta: title: 'Ios Switch'
    ,
      name: 'radio'
      path: 'radio'
      component: V 'components/Radio'
      meta: title: 'Radio'
    ,
      name: 'load-manager'
      path: 'load-manager'
      component: V 'components/LoadManager'
      meta: title: 'Load Manager'
    ,
      name: 'list-manager'
      path: 'list-manager'
      component: V 'components/ListManager'
      meta: title: 'List Manager'
    ,
      name: 'spinner'
      path: 'spinner'
      component: V 'components/Spinner'
      meta: title: 'Spinner'
    ,
      name: 'back'
      path: 'back'
      component: V 'components/Back'
      meta: title: 'Back button'
    ,
      name: 'modal'
      path: 'modal'
      component: V 'components/Modal'
      meta: title: 'Modal'
    ]
  ,
    name: 'directives'
    path: '/directives'
    component: V 'directives/Home'
    children: [
      name: 'deep-key'
      path: 'deep-key'
      component: V 'directives/DeepKey'
      meta: title: 'Deep Key'
    ,
      name: 'translate'
      path: 'translate'
      component: V 'directives/Translate'
      meta: title: 'Translate'
    ,
      name: 't-model'
      path: 't-model'
      component: V 'directives/TModel'
      meta: title: 'T Model'
    ,
      name: 'text-bind'
      path: 'text-bind'
      component: V 'directives/TextBind'
      meta: title: 'Text Bind'
    ]
  ,
    name: 'filters'
    path: '/filters'
    component: V 'filters/Home'
    children: [
      name: 'currency'
      path: 'currency'
      component: V 'filters/Currency'
      meta: title: 'Currency'
    ,
      name: 'date'
      path: 'date'
      component: V 'filters/Date'
      meta: title: 'Date'
    ,
      name: 'deep-key'
      path: 'deep-key'
      component: V 'filters/DeepKey'
      meta: title: 'Deep Key'
    ,
      name: 'enums'
      path: 'enums'
      component: V 'filters/Enums'
      meta: title: 'Enums'
    ,
      name: 'translate'
      path: 'translate'
      component: V 'filters/Translate'
      meta: title: 'Translate'
    ,
      name: 't-model'
      path: 't-model'
      component: V 'filters/TModel'
      meta: title: 'T Model'
    ,
      name: 'truncate'
      path: 'truncate'
      component: V 'filters/Truncate'
      meta: title: 'Truncate'
    ,
      name: 'masks'
      path: 'masks'
      component: V 'filters/Masks'
      meta: title: 'Masks'
    ]
  ,
    name: 'utils'
    path: '/utils'
    component: V 'utils/Home'
    children: [
      name: 'deep-clone'
      path: 'deep-clone'
      component: V 'utils/DeepClone'
      meta: title: 'Deep Clone'
    ,
      name: 'deep-key'
      path: 'deep-key'
      component: V 'utils/DeepKey'
      meta: title: 'Deep Key'
    ,
      name: 'i18n'
      path: 'i18n'
      component: V 'utils/I18n'
      meta: title: 'I18n'
    ,
      name: 'is-date'
      path: 'is-date'
      component: V 'utils/IsDate'
      meta: title: 'Is Date'
    ,
      name: 'uc-first'
      path: 'uc-first'
      component: V 'utils/UcFirst'
      meta: title: 'Uc First'
    ,
      name: 'masks'
      path: 'masks'
      component: V 'utils/Masks'
      meta: title: 'Masks'
    ]

]
