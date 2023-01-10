import "bootstrap/dist/css/bootstrap.min.css";
import { Form, InputGroup, Row, Button } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    mobile: "",
    email: "",
    address1: "",
    DNI: "",
    city: "",
    a_state: "",
    curso: "",
    comprobante: "",
    
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitButton = (e) => {
    e.preventDefault();
    console.log(form);
    resetButton();
  };

  const resetButton = () => {
    setForm({
      first_name: "",
      last_name: "",
      mobile: "",
      email: "",
      address1: "",
      DNI: "",
      a_state: "",
      curso: "",
      comprobante: "",

      
    });
  };

  return (
    <>
      {/* <Container>
    <Row className="justify-content-md-center">
        
      <h1>Regitro de alumnos</h1>
      <Form className="container mt-3 mb-3">
        <Row className="mb-3">
          <Form.Group controlId="nombre" className="col col-sm-6">
              <Form.Label> Nombre: </Form.Label>
              <Form.Control type="text"  className="form-control" placeholder="Nombre del Alumno" />

              <Form.Label >Apellido: </Form.Label>
              <Form.Control type="text" placeholder="Apellido del Alumno" />
          </Form.Group>


          <Col xs="auto" >
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email: </Form.Label>
            <Form.Control type="email" placeholder="Email del Alumno" />
          </Form.Group>
          </Col>

          <Col xs="auto" >
          <Form.Group className="mb-3" controlId="dni">
            <Form.Label>DNI: </Form.Label>
            <Form.Control type="number" placeholder="DNI del Alumno" />
          </Form.Group>
          </Col>

          <Col xs="auto" >
          <Form.Group className="mb-3" controlId="telefono">
            <Form.Label>Teléfono: </Form.Label>
            <Form.Control type="number" placeholder="Teléfono del Alumno" />
          </Form.Group>
          </Col>

          <Form.Group className="mb-3" controlId="telefono">
            <Form.Label>Domicilio donde recibirá el Certificado : </Form.Label>
            <Form.Control type="text" placeholder="Domicilio del Alumno" />
          </Form.Group>

        <Form.Select aria-label="Cursos">
          <option>Curso al que se inscribe</option>
          <option value="nutricion">Nutrición</option>
          <option value="secEscolar">Sec. Escolar y preceptor</option>
          <option value="admEmpresas">Adm. de empresas</option>
          <option value="laboratorio">Laboratorio</option>
          <option value="desWeb">Desarrollo Web</option>
          <option value="agenSanitario">Agente Sanitario</option>
          <option value="enfermeria">Enfermería y paramédico</option>
          <option value="masoterapia">Masoterapia</option>
          <option value="diseño">Diseño para redes sociales</option>
          <option value="acompTerapeutico">Acompañante Terapéutico</option>
          <option value="recusrsosHumanos">Recursos Humanos</option>
          <option value="asisFarmacia">Asistente Farmacéutico</option>
          <option value="marketing">Marketing</option>
          <option value="auxJardin">Aux. Jardín</option>
          <option value="criminalistica">Criminalística</option>
        </Form.Select>
        </Row>
      </Form>
      </Row>
    </Container> */}
      <div className="container">
        <div className="centar">
          <h1 className="mb-3 mt-3">Formulario de Registro de alumnos</h1>

          <form
            action="https://formspree.io/f/mwkjkydj"
            method="POST"
            className="container mt-4 mb-3"
          >
            <Row className="mb-3">
              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="name"
                  name="first_name"
                  placeholder="Nombre del alumno"
                  onChange="{handleChange}"
                  className="form-control"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="name"
                  name="last_name"
                  placeholder="Apellido del alumno"
                  onChange="{handleChange}"
                  className="form-control"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formBasicMobile" className="col col-sm-">
                <Form.Label>Móvil</Form.Label>
                <InputGroup>
                  <InputGroup.Text id="basic-addon1">+54</InputGroup.Text>
                  <Form.Control
                    aria-label="Mobile Number"
                    type="mobile"
                    aria-describedby="basic-addon1"
                    className="form-control"
                    name="mobile"
                    placeholder="Número con WhatsApp"
                    onChange="{handleChange}"
                    required
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="col col-sm-6">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <Form.Control
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    type="email"
                    name="email"
                    placeholder="Email del alumno"
                    onChange="{handleChange}"
                    required
                  />
                </InputGroup>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group
                className=" col col-sm-8"
                controlId="formGridAddress1"
              >
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  className="form-control"
                  type="text"
                  name="address1"
                  placeholder=" Dirección donde recibirá el certificado"
                  onChange="{handleChange}"
                  required
                />
              </Form.Group>
              <Form.Group className="col col-sm-6" controlId="formGridDNI">
                <Form.Label>DNI</Form.Label>
                <Form.Control
                  className="form-control"
                  name="DNI"
                  placeholder="DNI del alumno"
                  onChange="{handleChange}"
                  type="number"
                  required
                />
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group controlId="formGridCity" className="col col-sm-4">
                <Form.Label>Provincia</Form.Label>
                <Form.Select
                  defaultValue="Tierra del Fuego"
                  className="form-control"
                  name="a_state"
                  onChange="{handleChange}"
                  required
                >
                  <option value="Tierra del Fuego">Tierra del Fuego</option>
                  <option value="Misiones">Misiones</option>
                </Form.Select>
              </Form.Group>

              <Form.Group controlId="formGridState" className="col col-sm-8">
                <Form.Label>Curso al que se inscribe</Form.Label>
                <Form.Select
                  defaultValue="Curso..."
                  className="form-control"
                  name="curso"
                  onChange="{handleChange}"
                  required
                >
                  <option value="nutricion">Nutrición</option>
                  <option value="secEscolar">Sec. Escolar y preceptor</option>
                  <option value="admEmpresas">Adm. de empresas</option>
                  <option value="laboratorio">Laboratorio</option>
                  <option value="desWeb">Desarrollo Web</option>
                  <option value="agenSanitario">Agente Sanitario</option>
                  <option value="enfermeria">Enfermería y paramédico</option>
                  <option value="masoterapia">Masoterapia</option>
                  <option value="diseño">Diseño para redes sociales</option>
                  <option value="acompTerapeutico">
                    Acompañante Terapéutico
                  </option>
                  <option value="recusrsosHumanos">Recursos Humanos</option>
                  <option value="asisFarmacia">Asistente Farmacéutico</option>
                  <option value="marketing">Marketing</option>
                  <option value="auxJardin">Aux. Jardín</option>
                  <option value="criminalistica">Criminalística</option>
                </Form.Select>
              </Form.Group>
              
              {/* <Form.Group className="col col-sm-6 mt-4" controlId="formGridComp">
                <Form.Label>Comprobante de pago</Form.Label>
                <Form.Control
                  className="form-control"
                  name="comprobante"
                  placeholder="Adjuntar comprobante"
                  onChange="{handleChange}"
                  type="file"
                
                />
              </Form.Group> */}
            </Row>
            <Row className="mb-3">
              <Form.Group
                controlId="formGridCheckbox"
                className="col col-sm-12"
              >
                <button
                  type="submit"
                  onClick="{submitButton}"
                  className="me-4 btn btn-success btn-lg btn-block"
                  
                >
                  Enviar datos
                </button>
                <button
                  type="reset"
                  onClick="{resetButton}"
                  className="me-4 btn btn-danger btn-lg btn-block"
                >
                  Borrar todo
                </button>
              </Form.Group>
            </Row>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
