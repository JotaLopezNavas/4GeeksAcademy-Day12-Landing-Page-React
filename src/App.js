import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card } from './components/Card';
import { Footer } from './components/Footer';

import { Jumbotron } from './components/Jumbotron';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
            <Jumbotron />
        </div>
        <div className="row">
            <div className="col">
              <Card 
              contenido="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras turpis quam, elementum a enim eu, hendrerit gravida nulla."/>

            </div>
            <div className="col">
            <Card 
              contenido="Duis massa risus, eleifend non nunc vel, posuere gravida lacus. Quisque id maximus nunc. Cras sed est diam. In ac convallis sem"/>
            </div>
            <div className="col">
            <Card 
              contenido="Quisque ligula erat, laoreet at lacinia et, commodo at enim. Morbi erat arcu, suscipit eget nisl porta, mollis sollicitudin elit. Nullam in venenatis dolor, et aliquet purus."/>
            </div>
            <div className="col">
            <Card 
              contenido="Ut fringilla, nisi non egestas egestas, leo quam dictum magna, sed accumsan nisi nisi ut diam. In sed mauris enim. Maecenas eu ornare orci. Phasellus."/>
            </div>
        </div>
      </div>
      <div className="container-fluid">
        <br />
        <div className="row">
            <div className="col">
              <Footer />
            </div>
        </div>
      </div>

    </div>
  );
}

export default App;
