import user from '../assets/img/userIcon.svg';

const UserLevel = ({onNoviceBtn, onExpertBtn, onExperiencedBtn}) => {
  return (
    <div className="level">
      <p className="level__expertise">Please choose your level of expertise</p>
      <img className="level__userIcon" src={user} alt="user level" />
      <div className="level__levelBtn" onClick={onNoviceBtn}>Novice</div>
      <div className="level__levelBtn" onClick={onExpertBtn}>Expert</div>
      <div className="level__levelBtn" onClick={onExperiencedBtn}>Experienced</div>
    </div>
  )
}
export default UserLevel;