import { FormWrapper } from "./FormWrapper"

type Table3Data = {
  Eleventh: boolean
  Twelfth: boolean
  Thirteenth: boolean
  Fourteenth: boolean
  Fifteenth: boolean
}

type Table3FormProps = Table3Data & {
  updateFields: (fields: Partial<Table3Data>) => void
}

export function Table3Form({
  Eleventh,
  Twelfth,
  Thirteenth,
  Fourteenth,
  Fifteenth,
  updateFields,
}: Table3FormProps) {
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
