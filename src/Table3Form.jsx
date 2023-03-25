import { FormWrapper } from "./FormWrapper"


export function Table3Form({
  Eleventh,
  Twelfth,
  Thirteenth,
  Fourteenth,
  Fifteenth,
  updateFields,
}) {
  return (
    <FormWrapper title="Table3 Creation">
      <label>Câu 11</label>
      <input
        type="checkbox"
        checked={Eleventh}
        onChange={e => updateFields({ Eleventh: e.target.checked })}
      />
      <label>Câu 12</label>
      <input
        type="checkbox"
        checked={Twelfth}
        onChange={e => updateFields({ Twelfth: e.target.checked })}
      />
      <label>Câu 13</label>
      <input
        type="checkbox"
        checked={Thirteenth}
        onChange={e => updateFields({ Thirteenth: e.target.checked })}
      />
      <label>Câu 14</label>
      <input
        type="checkbox"
        checked={Fourteenth}
        onChange={e => updateFields({ Fourteenth: e.target.checked })}
      />
      <label>Câu 15</label>
      <input
        type="checkbox"
        checked={Fifteenth}
        onChange={e => updateFields({ Fifteenth: e.target.checked })}
      />
    </FormWrapper>
  )
}
