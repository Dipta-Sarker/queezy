import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './SingleCard.css';

function SingleCard({quiz}) {
    const {name,logo,total,id} =quiz;
  return (
    <Card className='single-card' style={{ width: '18rem' }}>
      <Card.Img variant="top" className="card-logo" src={logo} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
         Total Quentity: {total}
        </Card.Text>
        <Link to={`quiz/${id}`}><Button variant="primary">Let's Practice</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default SingleCard;