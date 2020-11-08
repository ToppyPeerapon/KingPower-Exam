import * as React from 'react'
import 'antd/dist/antd.css'
import './App.css'
import { Information } from './components/Information'
import { Info } from './constant/Information'
import { useDispatch, useSelector } from 'react-redux'
import { deleteInfo, setInfo, updateInfo } from './redux/information/Action'
import { getInformation } from './redux/information/Selector'
import { TableInformation } from './components/Table'

const App: React.FC = () => {
  const dispatch = useDispatch()
  const infos = useSelector(getInformation)

  const [editInfo, setEditInfo] = React.useState<Info>()

  React.useEffect(() => {
    const infosLocalStorage = localStorage.getItem('Infos')
    if (!infosLocalStorage) return

    const infosLocalStorageJSON = JSON.parse(infosLocalStorage)
    dispatch(setInfo(infosLocalStorageJSON))
  }, [])

  const onSubmit = (info: Info): void => {
    dispatch(updateInfo(info))
    setEditInfo(undefined)
  }

  const onEdit = (id: Info['id']): void => {
    const infoById = infos.find(info => info.id === id)

    setEditInfo(infoById)
  }

  const onDelete = (id: Info['id']) => dispatch(deleteInfo(id))

  return (
    <div>
      <div className="container-information">
        <Information defaultInfo={editInfo} onSubmit={onSubmit} />
      </div>
      <div className="container-table">
        <TableInformation infos={infos} onDelete={onDelete} onEdit={onEdit} />
      </div>
    </div>
  )
}

export default App
