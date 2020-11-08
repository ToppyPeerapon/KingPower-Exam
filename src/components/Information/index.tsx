import { Button, DatePicker, Input, Radio, Select } from 'antd'
import Text from 'antd/lib/typography/Text'
import * as React from 'react'
import { v4 } from 'uuid'
import { Gender, Info, Nationality, PhoneCode, Title } from '../../constant/Information'
import './index.css'

type Props = {
  defaultInfo?: Info

  onSubmit: (information: Info) => void
}

export const Information: React.FC<Props> = ({ defaultInfo, onSubmit }) => {
  const [title, setTitle] = React.useState<Title>(Title.Mr)
  const [firstName, setFirstName] = React.useState<string>()
  const [lastName, setLastName] = React.useState<string>()
  const [birthday, setBirthday] = React.useState<Date>()
  const [nationality, setNationality] = React.useState<Nationality>()
  const [citizenId, setCitizenId] = React.useState<string>()
  const [gender, setGender] = React.useState<Gender>()
  const [mobileCode, setMobileCode] = React.useState<PhoneCode>()
  const [mobilePhone, setMobilePhone] = React.useState<string>()
  const [passportNo, setPassportNo] = React.useState<string>()
  const [expectSalary, setExpectSalary] = React.useState<string>()

  React.useEffect(() => {
    if (!defaultInfo) return

    setTitle(defaultInfo.title)
    setFirstName(defaultInfo.firstName)
    setLastName(defaultInfo.lastName)

    setNationality(defaultInfo.nationality)
    setCitizenId(defaultInfo.citizenId)
    setGender(defaultInfo.gender)
  }, [defaultInfo])

  const handleSubmit = (): void => {
    if (!title || !firstName || !lastName || !citizenId || !mobilePhone || !expectSalary) return

    const id = defaultInfo?.id ? defaultInfo.id : v4()

    onSubmit({
      id,
      title,
      firstName,
      lastName,
      birthday: new Date(),
      nationality,
      citizenId,
      gender,
      mobilePhone,
      passportNo,
      expectSalary,
    })
  }

  return (
    <div className="container">
      <div style={{ flexDirection: 'row', display: 'flex', flex: 1 }}>
        <div style={{ flex: 0.2, flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 0.5, marginRight: '10px', display: 'flex' }}>
            <Text>Title : </Text>
            <Text type="danger">*</Text>
          </div>
          <div style={{ flex: 0.5 }}>
            <Select onChange={valueChanged => setTitle(valueChanged)} value={title}>
              <Select.Option value={Title.Mr}>{Title.Mr}</Select.Option>
              <Select.Option value={Title.Ms}>{Title.Ms}</Select.Option>
            </Select>
          </div>
        </div>

        <div style={{ flex: 0.33, flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 0.5, marginRight: '10px', display: 'flex' }}>
            <Text>First name : </Text>
            <Text type="danger">*</Text>
          </div>
          <div style={{ flex: 0.5 }}>
            <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
        </div>

        <div style={{ flex: 0.33, flexDirection: 'row', display: 'flex' }}>
          <div style={{ flex: 0.5, marginRight: '10px', display: 'flex' }}>
            <Text>Last name : </Text>
            <Text type="danger">*</Text>
          </div>
          <div style={{ flex: 0.5 }}>
            <Input value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="row">
        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.4 }}>
          <div style={{ flex: 0.5, marginRight: '10px', display: 'flex' }}>
            <Text>Birthday : </Text>
            <Text type="danger">*</Text>
          </div>
          <div style={{ flex: 0.5 }}>
            <DatePicker format="MM/DD/YY" />
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row', flex: 0.4 }}>
          <div style={{ flex: 0.5, marginRight: '10px', display: 'flex' }}>
            <Text>Nationality : </Text>
          </div>
          <div style={{ flex: 0.5 }}>
            <Select
              onChange={valueChanged => setNationality(valueChanged)}
              value={nationality}
              placeholder="-- Please Select --"
            >
              {Object.values(Nationality).map(item => {
                return (
                  <Select.Option key={item} value={item}>
                    {item}
                  </Select.Option>
                )
              })}
            </Select>
          </div>
        </div>
      </div>

      <div className="row">
        <div>
          <Text>CitizenID : </Text>
        </div>
        <div>
          <Input value={citizenId} onChange={e => setCitizenId(e.target.value)} />
        </div>
      </div>

      <div className="row">
        <div>
          <Text>Gender : </Text>
        </div>
        <div>
          <Radio.Group value={gender} onChange={e => setGender(e.target.value)}>
            {Object.values(Gender).map(item => {
              return (
                <Radio key={item} value={item}>
                  {item.toLowerCase()}
                </Radio>
              )
            })}
          </Radio.Group>
        </div>
      </div>

      <div className="row">
        <div>
          <Text>Mobile Phone : </Text>
          <Text type="danger">*</Text>
        </div>

        <div>
          <Select value={mobileCode} onChange={valueChanged => setMobileCode(valueChanged)}>
            {Object.values(PhoneCode).map(item => {
              return (
                <Select.Option key={item} value={item}>
                  {item}
                </Select.Option>
              )
            })}
          </Select>
        </div>
        <Text>-</Text>
        <div>
          <Input value={mobilePhone} onChange={e => setMobilePhone(e.target.value)} />
        </div>
      </div>

      <div className="row">
        <div>
          <Text>Passport No : </Text>
        </div>
        <div>
          <Input value={passportNo} onChange={e => setPassportNo(e.target.value)} />
        </div>
      </div>

      <div className="row">
        <div>
          <Text>Expected Salary : </Text>
          <Text type="danger">*</Text>
        </div>
        <div>
          <Input
            value={expectSalary}
            onChange={e => setExpectSalary(e.target.value)}
            addonAfter="THB"
          />
        </div>
      </div>

      <div className="row">
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}
