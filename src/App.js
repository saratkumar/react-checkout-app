import './App.css';
import { useState } from 'react';
import { USER_FROM_FIELDS, STAGES } from './constants/user-form.constant';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';

import UserForm from './components/user-form';
import SuccessForm from './components/success-form';


function App() {
  // Local Variables 
  const [nextIndex, setNextIndex] = useState(1);
  const [userGroups, setUserGroups] = useState();
  const [form_fields, setFormFields] = useState(USER_FROM_FIELDS);
  const [showError, setShowError] = useState(false);
  const [postObj, setPostObj] = useState("");

  // User Group initial State
  useEffect(() => {
    if (!userGroups) {
      setUserGroups(form_fields.find(el => el.id === nextIndex).groups);
    }
  }, [form_fields, nextIndex, userGroups]);

  /*******
   * onNextClick - will process user clicks and render user form accordingly
   * params -  index
  ***** */
  const onNextClick = (index) => {
    if (nextIndex === form_fields.length) { return false }
    if (index >= nextIndex) {
      const proceedFurther = validate();
      if (!proceedFurther) {
        setShowError(true);
        return false;
      }
    }
    setShowError(false);
    setNextIndex(index);
    setNextIndex((state) => {
      setUserGroups(form_fields.find(el => el.id === state).groups)
      return state;
    });

    if (nextIndex === form_fields.length - 1) {
      prepareRequestJSON()
    }
  };


  /*******
     * validate - To check if all the information in the current tab is filled
  ***** */
  const validate = () => {

    const unUsedFields = form_fields.find(step => step.id === nextIndex).groups.fields.find(field => !field.value);
    if (unUsedFields) {
      return false;
    }

    return true;
  };

  /*******
     * prepareRequestJSON - this method process the Form_fields array and prepare the Request JSON for the API
  ***** */
  const prepareRequestJSON = () => {
    const obj = {};
    form_fields.forEach(step => {
      if (step.groups.fields && step.groups.fields.length) {
        obj[step.className] = {};
        step.groups.fields.forEach(elField => {
          obj[step.className][elField.keyToPost] = elField.value;
        });
      }
    });
    setPostObj(JSON.stringify(obj));
  }

  return (
    <div className="App">
        <Container fluid>
          <Col>
            <Row className="justify-content-md-center">
              <Col md="6">
                {/* Step Wizad Section */}
                <div className="d-flex justify-content-md-center">
                  <ul id="progressbar" className="w-100 p-0 mt-3">
                    {(form_fields && form_fields.length) && form_fields.map((el, index) => {
                      return (
                        <li key={el.className} className={(index + 1) <= nextIndex ? " active" : ""} id={el.className} onClick={() => onNextClick(el.id)}><strong>{el.description}</strong></li>
                      )
                    })
                    }
                  </ul>
                </div>
              {/* Step Wizad Section Ends Here*/}
                {/* Render user forms based on the step selection */}
                {
                form_fields[nextIndex - 1].className === STAGES.CONFIRM ? <SuccessForm postJSON={postObj} /> :
                    (
                      <div>
                        <UserForm userGroup={userGroups} showError={showError} />
                        {/* Footer Section */}
                        <div className="footer mt-3">
                          {nextIndex !== 1 && <Button variant="primary" className="mr-2" onClick={() => onNextClick(nextIndex - 1)}>Back</Button>}
                          {nextIndex !== form_fields.length - 1 && <Button variant="primary" className="mr-2" onClick={() => onNextClick(nextIndex + 1)}>Next Step</Button>}
                          {nextIndex === form_fields.length - 1 && <Button variant="primary" onClick={() => onNextClick(nextIndex + 1)}>Submit</Button>}
                        </div>
                        {/* Footer Section Ends here*/}
                      </div>
                    )
                }
              </Col>
            </Row>
          </Col>
        </Container>
    </div>
  );
}

export default App;
