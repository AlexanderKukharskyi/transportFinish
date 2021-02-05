import { createStoreon } from "storeon"
import {storeonDevtools, storeonLogger } from 'storeon'
import { order } from "./order";
import {vehicles} from "./vehicles"
import {data} from './data'

const isDev = process.env.NODE_ENV !== 'production';
const store = createStoreon([
  order,
  vehicles,
  data,
  isDev && storeonDevtools,
  isDev && storeonLogger,])

export {
  store
} 