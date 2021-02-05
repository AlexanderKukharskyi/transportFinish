import { createStoreon } from "storeon"
import { order } from "./order";
import {vehicles} from "./vehicles"
import {data} from './data'

const store = createStoreon([order, vehicles])

export {
  store
} 