import { Button, DatePicker, Input, notification, Radio, Select } from 'antd'
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

  const validationCitizenId = (id: string): string | boolean => {
    let index = 13
    let result = 0

    if (id.length !== 13) return 'Citizen id not complete 13 digits'
    for (let i = 0; i < 12; i++) {
      result += Number(id[i]) * index
      index--
    }
    result %= 11
    result -= 11

    if (Number(id[12]) !== Math.abs(result)) return 'Not format citizen id'
    return true
  }

  const validationMobilePhone = (number: string): string | boolean => {
    if (number.length !== 10) return 'Mobile phone not complete 10 Digit'
    return true
  }

  const handleSubmit = (): void => {
    let messages: string[] = []
    if (
      !title ||
      !firstName ||
      !lastName ||
      !citizenId ||
      !mobileCode ||
      !mobilePhone ||
      !expectSalary ||
      !birthday
    ) {
      if (!title) messages = [...messages, 'Please input your title']
      if (!firstName) messages = [...messages, 'Please input your first name']
      if (!lastName) messages = [...messages, 'Please input your last name']
      if (!citizenId) messages = [...messages, 'Please input your citizen id']
      if (!mobileCode) messages = [...messages, 'Please input your mobile code']
      if (!mobilePhone) messages = [...messages, 'Please input your mobile phone']
      if (!passportNo) messages = [...messages, 'Please input your passport no']
      if (!expectSalary) messages = [...messages, 'Please input your expect salary']

      notification['warning']({
        message: 'Validation failed',
        description: messages.map(message => (
          <>
            <Text key={message}>{message}</Text>
            <br />
          </>
        )),
      })
      messages = []
      return
    }

    const validateMessageCitizenId = validationCitizenId(citizenId)

    if (typeof validateMessageCitizenId === 'string') {
      notification['warning']({
        message: 'Validation failed',
        description: validateMessageCitizenId,
      })

      return
    }

    const validateMessageMobilePhone = validationMobilePhone(mobilePhone)

    if (typeof validateMessageMobilePhone === 'string') {
      notification['warning']({
        message: 'Validation failed',
        description: validateMessageMobilePhone,
      })

      return
    }

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
