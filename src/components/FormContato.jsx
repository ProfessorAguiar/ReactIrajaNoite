import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function FormContato() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false || valid<7) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [nome,setNome]=useState('')
  const [Vnome, setVnome]=useState(false)
  const [valid,setValid]=useState(0)
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="5" controlId="nome">
          <Form.Label>Nome Completo:</Form.Label>
          <Form.Control 
            value={nome}
            type="text"
            placeholder="Nome Completo: "
            onChange={(e)=>{
                setNome(e.target.value)
                console.log(nome)
                }
            }
            onBlur={((e)=>{
                if(nome.length<8){
                    console.log("nome inválido")
                    setVnome(true)
                }else{
                    setVnome(false)
                    setValid(valid+1)
                }
            }
                )}
            isInvalid={Vnome}
          />
          <Form.Control.Feedback type="invalid">
              Insira seu nome completo.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="1" controlId="idade">
          <Form.Label>Idade:</Form.Label>
          <Form.Control
            required
            type="number"
          />
          <Form.Control.Feedback type="invalid">
              Insira a sua idade.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="email">
          <Form.Label>Email</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Insira seu email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="cpf">
          <Form.Label>CPF</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="CPF"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Insira seu CPF.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="3" controlId="senha">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Senha" required />
          <Form.Control.Feedback type="invalid">
            Insira uma senha válida.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="repitaSenha">
          <Form.Label>Repita sua Senha</Form.Label>
          <Form.Control type="text" placeholder="Repita sua senha" required />
          <Form.Control.Feedback type="invalid">
            As senhas devem ser iguais.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Aceito os termos e condições"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Cadastrar</Button>
    </Form>
  );
}
export default FormContato