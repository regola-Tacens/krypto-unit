import user from '../assets/img/userIcon.svg';

const UserLevel = () => {
  return (
    <div className="level">
      <p className="level__expertise">Please choose your level of expertise</p>
      <img className="level__userIcon" src={user} alt="user level" />
      <div className="level__levelBtn">Novice</div>
      <div className="level__levelBtn">Expert</div>
      <div className="level__levelBtn">Experienced</div>
    </div>
  )
}
export default UserLevel;