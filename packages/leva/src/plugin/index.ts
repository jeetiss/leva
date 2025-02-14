// used as entrypoint

// export all components
import { Row, Label, Portal, Overlay } from '../components/UI'
import { String } from '../components/String'
import { Number } from '../components/Number'
import { Boolean } from '../components/Boolean'
import { Select } from '../components/Select'
import { Vector } from '../components/Vector'
import { InnerLabel } from '../components/ValueInput/StyledInput'

export const Components = {
  Row,
  Label,
  Portal,
  Overlay,
  String,
  Number,
  Boolean,
  Select,
  Vector,
  InnerLabel,
}

export { default as tinycolor2 } from 'tinycolor2'
export { debounce, clamp, pad, evaluate, range, invertedRange } from '../utils'
export { normalizeKeyedNumberSettings } from '../components/Vector/vector-utils'

export { createPlugin } from '../plugin'

// export vector utilities
export * from '../components/Vector/vector-plugin'
// export useful hooks
export { useDrag, useCanvas2d, useTransform, useInput, useValue, useValues } from '../hooks'
export { useInputContext, useStoreContext } from '../context'

// export styling utilities
export { styled, useTh } from '../styles'

// export types
export * from '../types/public'
export type { InternalVectorSettings } from '../components/Vector/vector-types'
export type { InternalNumberSettings } from '../components/Number/number-types'
