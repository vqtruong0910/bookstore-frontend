import clsx from 'clsx'
import { useId } from 'react'
import { useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

function MenuSelect({ name, control, rules, data = [] }) {
  const { t } = useTranslation()
  const uID = useId()
  const { field, fieldState } = useController({ name, control, rules })

  return (
    <>
      <select
        {...field}
        className={clsx(
          fieldState.error && 'border-red-600',
          'p-3 border transition-colors focus:outline-none focus:placeholder-slate-300 block w-full'
        )}
      >
        <option value="">--{t(`Lựa chọn`)}--</option>
        {data?.map((item, index) => (
          <option
            key={uID + index}
            value={item?.IDDanhMuc || item?.IDTheLoai || item?.IDNhaXuatBan || item.IDTacGia}
          >
            {item?.TenDanhMuc || item?.TenTheLoai || item?.TenNhaXuatBan || item?.TenTacGia}
          </option>
        ))}
      </select>
      {fieldState.error && (
        <span className="px-2 italic text-sm text-red-500">{t(fieldState.error.message)}*</span>
      )}
    </>
  )
}

export default MenuSelect
