import React, { useState } from 'react'
import { NumberInput } from '../ValueInput'
import { Label, Row } from '../UI'
import { useDrag } from '../../hooks'
import { RangeGrid } from './StyledNumber'
import { RangeSlider } from './RangeSlider'
import { useInputContext } from '../../context'
import type { NumberProps } from './number-types'
import { multiplyStep } from '../../utils'
import { InnerNumberLabel } from '../ValueInput/StyledInput'

type DraggableLabelProps = {
  label: string
  step: number
  onUpdate: (v: any) => void
}

const DraggableLabel = React.memo(({ label, onUpdate, step }: DraggableLabelProps) => {
  const [dragging, setDragging] = useState(false)
  const bind = useDrag(({ active, delta: [dx], event, memo = 0 }) => {
    setDragging(active)
    memo += dx / 2
    if (Math.abs(memo) >= 1) {
      onUpdate((v: any) => parseFloat(v) + Math.floor(memo) * step * multiplyStep(event))
      memo = 0
    }
    return memo
  })

  return (
    <InnerNumberLabel dragging={dragging} title={label.length > 1 ? label : ''} {...bind()}>
      {label.charAt(0)}
    </InnerNumberLabel>
  )
})

export function Number({
  label,
  id,
  displayValue,
  onUpdate,
  onChange,
  settings,
  hideLabel = false,
}: Omit<NumberProps, 'setSettings'> & { id?: string; label: string; hideLabel?: boolean }) {
  const InnerLabel = !hideLabel && <DraggableLabel label={label} step={settings.step} onUpdate={onUpdate} />
  return (
    <NumberInput id={id} value={String(displayValue)} onUpdate={onUpdate} onChange={onChange} innerLabel={InnerLabel} />
  )
}

export function NumberComponent() {
  const props = useInputContext<NumberProps>()
  const { label, value, onUpdate, settings, id } = props
  const { min, max } = settings
  const hasRange = max !== Infinity && min !== -Infinity

  return (
    <Row input>
      <Label>{label}</Label>
      <RangeGrid hasRange={hasRange}>
        {hasRange && <RangeSlider value={parseFloat(value as any)} onDrag={onUpdate} {...settings} />}
        <Number {...props} id={id} label="value" hideLabel={hasRange} />
      </RangeGrid>
    </Row>
  )
}
