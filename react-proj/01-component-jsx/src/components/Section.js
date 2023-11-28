import PropTypes from "prop-types";
function Section({title, children}) {
    return (
        <>
        <div className="Section__section">
            <h3 className="Section__title">{title}제목</h3>
            <div>{children}</div>
        </div>
    
    </>
    )

}


Section.propTpyes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Section;