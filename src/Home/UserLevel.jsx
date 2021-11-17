import user from '../assets/img/userIcon.svg';

const UserLevel = ({onNoviceBtn, onExpertBtn, onExperiencedBtn, isNovice, isExpert, isExperienced}) => {
  return (
    <div className="level">
      {/* <p className="level__expertise">Please choose your level of expertise</p> */}
      <img className="level__userIcon" src={user} alt="user level" />
      <div className={ isNovice ? "level__levelBtn level__levelBtn--active" : "level__levelBtn"} onClick={onNoviceBtn}>Novice</div>
      <div className={ isExpert ? "level__levelBtn level__levelBtn--active" : "level__levelBtn"} onClick={onExpertBtn}>Expert</div>
      <div className={ isExperienced ? "level__levelBtn level__levelBtn--active" : "level__levelBtn"} onClick={onExperiencedBtn}>Experienced</div>
    </div>
  )
}
export default UserLevel;