import { Button, Table } from 'antd'
import Text from 'antd/lib/typography/Text'
import * as React from 'react'
import { Info } from '../../constant/Information'

type Props = {
  infos: Info[]

  onDelete: (id: Info['id']) => void
  onEdit: (id: Info['id']) => void
}

export const TableInformation: React.FC<Props> = ({ infos, onDelete, onEdit }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Mobile Phone',
      dataIndex: 'mobileNumber',
      key: 'mobilePhone',
    },
    {
      title: 'Nationality',
      dataIndex: 'nationality',
      key: 'nationality',
    },
    {
      dataIndex: '',
      key: 'x',
      // eslint-disable-next-line react/display-name
      render: (_text: string, record: Info) => (
        <>
          <Button onClick={() => onEdit(record.id)} type="link">
            Edit
          </Button>
          <Text> / </Text>
          <Button onClick={() => onDelete(record.id)} danger type="link">
            Delete
          </Button>
        </>
      ),
    },
  ]

  const dataSource = infos.map(info => {
    return {
      ...info,
      name: `${info.firstName} ${info.lastName}`,
      mobileNumber: `${info.mobileCode}${info.mobilePhone}`,
    }
  })

  return (
    <Table
      pagination={{ position: ['topRight'] }}
      columns={columns}
      dataSource={dataSource}
    ></Table>
  )
}
