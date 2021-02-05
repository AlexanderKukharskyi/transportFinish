import { order } from "./order";

import { createStoreon } from "storeon"

const store = createStoreon([order])
export {
  store
} 