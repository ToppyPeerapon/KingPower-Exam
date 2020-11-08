import { Button, DatePicker, Input, Radio, Select } from 'antd'
import Text from 'antd/lib/typography/Text'
import * as React from 'react'
import { v4 } from 'uuid'
import { Gender, Info, Nationality, PhoneCode, Title } from '../../constant/Information'
import './index.css'
import moment from 'moment'

type Props = {
  defaultInfo?: Info

  onSubmit: (information: Info) => void
}

export const Information: React.FC<Props> = ({ defaultInfo, onSubmit }) => {
  const [title, setTitle] = React.useState<Title>()
  const [firstName, setFirstName] = React.useState<string>()
  const [lastName, setLastName] = React.useState<string>()
  const [birthday, setBirthday] = React.useState<Info['birthday']>()
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
    setBirthday(defaultInfo.birthday)
    setNationality(defaultInfo.nationality)
    setCitizenId(defaultInfo.citizenId)
    setGender(defaultInfo.gender)
    setMobileCode(defaultInfo.mobileCode)
    setMobilePhone(defaultInfo.mobilePhone)
    setPassportNo(defaultInfo.passportNo)
    setExpectSalary(defaultInfo.expectSalary)
  }, [defaultInfo])

  const handleSubmit = (): void => {
    if (
      !title ||
      !firstName ||
      !lastName ||
      !citizenId ||
      !mobileCode ||
      !mobilePhone ||
      !expectSalary ||
      !birthday
    )
      return

    const id = defaultInfo?.id ? defaultInfo.id : v4()

    setTitle(undefined)
    setFirstName(undefined)
    setLastName(undefined)
    setBirthday(undefined)
    setNationality(undefined)
    setCitizenId(undefined)
    setGender(undefined)
    setMobileCode(undefined)
    setMobilePhone(undefined)
    setPassportNo(undefined)
    setExpectSalary(undefined)

    onSubmit({
      id,
      title,
      firstName,
      lastName,
      birthday,
      nationality,
      citizenId,
      gender,
      mobileCode,
      mobilePhone,
      passportNo,
      expectSalary,
    })
  }

  return (
    <div className="container">
      <div className="row">
        <div className="container-title">
          <div className="header">
            <Text>Title : </Text>
            <Text type="danger">*</Text>
          </div>
          <div className="input">
            <Select
              style={{ width: '100%' }}
              onChange={valueChanged => setTitle(valueChanged)}
              value={title}
            >
              <Select.Option value={Title.Mr}>{Title.Mr}</Select.Option>
              <Select.Option value={Title.Ms}>{Title.Ms}</Select.Option>
            </Select>
          </div>
        </div>

        <div className="container-first-name">
          <div className="header">
            <Text>First name : </Text>
            <Text type="danger">*</Text>
          </div>
          <div className="input">
            <Input value={firstName} onChange={e => setFirstName(e.target.value)} />
          </div>
        </div>

        <div className="container-last-name">
          <div className="header">
            <Text>Last name : </Text>
            <Text type="danger">*</Text>
          </div>
          <div className="input">
            <Input value={lastName} onChange={e => setLastName(e.target.value)} />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="container-birthday">
          <div className="header">
            <Text>Birthday : </Text>
            <Text type="danger">*</Text>
          </div>
          <div className="input">
            <DatePicker
              value={birthday ? moment(birthday) : undefined}
              onChange={(date: moment.Moment | null) => {
                if (!date) return
                setBirthday(date)
              }}
              format="MM/DD/YY"
            />
          </div>
        </div>

        <div className="container-nationality">
          <div className="header">
            <Text>Nationality : </Text>
          </div>
          <div className="input">
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

      <div className="row container-citizen-id">
        <div className="header">
          <Text>CitizenID : </Text>
        </div>
        <div className="input">
          <Input value={citizenId} onChange={e => setCitizenId(e.target.value)} />
        </div>
      </div>

      <div className="row container-gender">
        <div className="header">
          <Text>Gender : </Text>
        </div>
        <div className="input">
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

      <div className="row container-mobile-phone">
        <div className="header">
          <Text>Mobile Phone : </Text>
          <Text type="danger">*</Text>
        </div>

        <Select
          className="select"
          value={mobileCode}
          onChange={valueChanged => setMobileCode(valueChanged)}
        >
          {Object.values(PhoneCode).map(item => {
            return (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            )
          })}
        </Select>
        <Text className="dash">-</Text>
        <div className="input">
          <Input value={mobilePhone} onChange={e => setMobilePhone(e.target.value)} />
        </div>
      </div>

      <div className="row container-passport">
        <div className="header">
          <Text>Passport No : </Text>
        </div>
        <div>
          <Input value={passportNo} onChange={e => setPassportNo(e.target.value)} />
        </div>
      </div>

      <div className="row container-expect-salary">
        <div className="header">
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
