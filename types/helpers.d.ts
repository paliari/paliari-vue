import { Component, DirectiveFunction } from 'vue'

export type Store = {namespaced: boolean, state?: object, getters?: object, actions?: object, mutations?: object }

export type Components = {
  Back: Component,
  HeaderBar: Component,
  Checkbox: Component,
  IosSwitch: Component,
  Radio: Component,
  InputContainer: Component,
  Spinner: Component,
  LoadManager: Component,
  ListManager: Component,
  Loading: Component,
  Paginator: Component,
  SvgArrow: Component
}

export type Filters = {
  truncate(text: string, length?: 30): string

  currency(number: number, prefix?: '', sufix?: ''): string

  date(date: string, format?: 'shortDateTime'): string
}

export type Directives = {
  BackgroundImage: DirectiveFunction,
  TextBind: DirectiveFunction
}

export type storeHelpers = {
  SUCCESS: string,
  LOADING: string,
  FAILURE: string,

  base(store: Store): Store

  paginator(store: Store): Store

  crud(store: Store): Store
}

export type storePlugins = (store: object) => void

export type Fecha = {}
