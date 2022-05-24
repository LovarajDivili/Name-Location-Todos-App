import './index.css'

const UserDetails = props => {
  const {userDetails, deletingUser} = props
  const {name, location, id} = userDetails

  const onDeleteUser = () => {
    deletingUser(id)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{location}</p>
        <button className="delete" onClick={onDeleteUser}>
          DELETE
        </button>
      </div>
    </li>
  )
}

export default UserDetails
