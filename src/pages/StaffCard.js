import PropTypes from 'prop-types';
const StaffCard = (props) => {
    const { id, name, role, email } = props;
    console.log("Props: " + props);
    return (
        <div>
            <h3>Tên {name}</h3>
            <h3>Chức vụ {role}</h3>
            <h3>Email {email}</h3>
        </div>
    );
}
StaffCard.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired
}
export default StaffCard;