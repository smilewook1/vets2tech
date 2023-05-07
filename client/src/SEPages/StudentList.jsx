import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import StudentListCard from "./StudentListCard";

function StudentList(props) {
    return (
        <>
            <Row md={3} className="g-4 mt-1">
                {props.items?.map((item) =>  (
                <Col key={item.id}>
                    <StudentListCard key={item.id} {...item} />
                </Col>
                ))}
            </Row>
        </>
    );
}

export default StudentList;