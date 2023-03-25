import { FormWrapper } from "./FormWrapper"


export function Table1Form({
  First,
  Second,
  Third,
  Fourth,
  Fifth,
  updateFields,
}) {
  return (
    <FormWrapper title="User Details">
      <label>Câu 1</label>
      <input
        type="checkbox"
        checked={First}
        onChange={e => updateFields({ First: e.target.checked })}
      />
      <label>Câu 2</label>
      <input
        type="checkbox"
        checked={Second}
        onChange={e => updateFields({ Second: e.target.checked })}
      />
      <label>Câu 3</label>
      <input
        type="checkbox"
        checked={Third}
        onChange={e => updateFields({ Third: e.target.checked })}
      />
      <label>Câu 4</label>
      <input
        type="checkbox"
        checked={Fourth}
        onChange={e => updateFields({ Fourth: e.target.checked })}
      />
      <label>Câu 5</label>
      <input
        type="checkbox"
        checked={Fifth}
        onChange={e => updateFields({ Fifth: e.target.checked })}
      />
    </FormWrapper>
  )
}
