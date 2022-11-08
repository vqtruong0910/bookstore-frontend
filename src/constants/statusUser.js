import { TbLock } from 'react-icons/tb'
import { RiRadioButtonLine } from 'react-icons/ri'
import { IoMdCheckmark } from 'react-icons/io'

const gender = {
    0: "Nữ",
    1: "Nam"
}

const permission = {
    0: "Admin",
    1: "Thường"
}

const status = {
    0: <TbLock />,
    1: <RiRadioButtonLine />
}

const verifyEmail = {
    0: "X",
    1: <IoMdCheckmark />
}

export { gender, permission, status, verifyEmail }
