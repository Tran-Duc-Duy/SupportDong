import { FormWrapper } from "./FormWrapper"


export function Table2Form({
  Sixth,
  Seventh,
  Eighth,
  Ninth,
  Tenth,
  updateFields,
}) {
  return (
    <FormWrapper title="Address">
      <label>Câu 6</label>
      <input
        type="checkbox"
        checked={Sixth}
        onChange={e => updateFields({ Sixth: e.target.checked })}
      />
      <label>Câu 7</label>
      <input
        type="checkbox"
        checked={Seventh}
        onChange={e => updateFields({ Seventh: e.target.checked })}
      />
      <label>Câu 8</label>
      <input
        type="checkbox"
        checked={Eighth}
        onChange={e => updateFields({ Eighth: e.target.checked })}
      />
      <label>Câu 9</label>
      <input
        type="checkbox"
        checked={Ninth}
        onChange={e => updateFields({ Ninth: e.target.checked })}
      />
      <label>Câu 10</label>
      <input
        type="checkbox"
        checked={Tenth}
        onChange={e => updateFields({ Tenth: e.target.checked })}
      />
    </FormWrapper>
  )
}
