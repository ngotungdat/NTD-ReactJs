import PropTypes from 'prop-types';
const StaffDetail = (props) => {
    const { id, name, role, email } = props;
    console.log("Props: " + props);
    return (
        <div>
            <h3>ID {id}</h3>
            <h3>Tên {name}</h3>
            <h3>Chức vụ {role}</h3>
            <h3>Email {email}</h3>
        </div>
    );
}
StaffDetail.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired
}
export default StaffDetail;