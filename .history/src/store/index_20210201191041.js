import { createStoreon } from "storeon"
import { order } from "./order";

const store = createStoreon([order])

export {
  store
} 