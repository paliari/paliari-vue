import { Component, DirectiveFunction } from 'vue'

export type Store = { namespaced: boolean, state?: object, getters?: object, actions?: object, mutations?: object }
export type Api = {
  list?(params?: object): Promise<object>;
  one?(id: number): Promise<object>;
  create?(data: object): Promise<object>;
  update?(data: object): Promise<object>;
  remove?(id: number): Promise<object>;
}

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

  currency(number: number, prefix?: '', suffix?: ''): string

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

  paginator(store: Store, api: Api): Store

  crud(store: Store, api: Api): Store
}

export type storePlugins = (store: object) => void

export type Fecha = {}
