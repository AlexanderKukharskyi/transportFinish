import { createStoreon } from "storeon"
import { order } from "./order";
import {vehicles} from "./vehicles"

const store = createStoreon([order, vehicles])

export {
  store
} 