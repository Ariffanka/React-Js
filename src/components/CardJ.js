import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const CardJ=(props)=>{
    return(
 <div>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.bidang}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
</div>

    
  );

}

export default CardJ;