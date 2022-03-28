import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


function WeatherApp() {
    //https://codepen.io/derekjp/pen/yyVWOq 
  return (
    <div>
        <Row>
            <Col md='4'>1 of 2</Col>
            <Col md='8'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://images.pexels.com/photos/33545/sunrise-phu-quoc-island-ocean.jpg?cs=srgb&dl=pexels-pixabay-33545.jpg&fm=jpg" />

                    <Card.Body>
                        <Card.Title>
                            <h1>Monday</h1>
                        </Card.Title>
                        
                        <Card.Title>
                            <span class="temp">23&deg;</span>
                        </Card.Title>
                        <Card.Text>
                            <span class="high-low">15&deg;/ 28&deg;</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </div>
  );
}

export default WeatherApp;
