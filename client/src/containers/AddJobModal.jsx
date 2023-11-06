import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import {toast} from 'react-toastify';
// import {useMutation, useClient} from 'react-query';
// import * as api from ''; // need to double check with backend team

const AddJobModal = (props) => {
  // create state for each form group
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [selectedStatus, setSelectedStatus] = useState(''); 
  const [jobLocation, setJobLocation] = useState('');
  const [jobUrl, setJobUrl] = useState('');
  const [minSalary, setMinSalary] = useState('');
  const [maxSalary, setMaxSalary] = useState('');
  const [level, setLevel] = useState('');
  const [hours, setHours] = useState('');

  // declare 'createJobMutation' func to add job to database
  // const createJobMutation = useMutation(api.createJob, {
  //   onError: (err) => {
  //     console.error(err);
  //     toast.error('Could not save job.');
  //   },
  //   onSuccess: (data) => {
  //     queryClient.invalidateQueries('jobs');
  //     toast.success(`Job: ${data['title']} is saved!`);
  //     clear();
  //   }
  // });

  // declare 'clear' function that will reset to default
  const clear = () => {
    setJobTitle('');
    setCompanyName('');
    setJobLocation('');
    setJobUrl('');
    setMinSalary('');
    setMaxSalary('');
    setLevel('');
    setHours('');
    props.onHide();
  };

  // declare 'save' function to save inputted info
  const save = (e) => {
    e.preventDefault();
    const payload = {
      'title': jobTitle,
      'company': companyName,
      'status': selectedStatus,
      'location': jobLocation,
      'url': jobUrl,
      'minSalary': minSalary,
      'maxSalary': maxSalary,
      'level': level,
      'hours': hours
    };
    // createJobMutation.mutate(payload);
  };

  return (
    <Modal {...props} size='lg' aria-labelled='SearchModal' onHide={clear}>
      <Form onSubmit={save}>
        <Modal.Header closeButton>
          <Modal.Title id='addJobModal'>
            Add a new job
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId='inputJobTitle'>
            <Form.Label>Job Title :</Form.Label>
            <Form.Control 
              type='text'
              name='jobTitle'
              placeholder='Enter job title'
              value={jobTitle}
              required
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='inputCompany'>
            <Form.Label>Company Name :</Form.Label>
            <Form.Control
              type='text'
              name='companyName'
              placeholder='Enter company name'
              value={companyName}
              required
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='inputLevel'>
            <Form.Label>Level :</Form.Label>
            <Form.Control
              type='text'
              name='inputLevel'
              placeholder='Enter job level'
              value={level}
              required
              onChange={(e) => setLevel(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='inputHours'>
            <Form.Label>Hours :</Form.Label>
            <Form.Control
              type='text'
              name='inputHours'
              placeholder='Enter hours'
              value={hours}
              required
              onChange={(e) => setHours(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId='appStatus'>
            <Form.Label>Application Status :</Form.Label>
            <Form.Select
              aria-label='select'
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
            >
              <option>Select a status</option>
              <option value={'bookmarked'}>Bookmarked</option>
              <option value={'applying'}>Applying</option>
              <option value={'applied'}>Applied</option>
              <option value={'interview'}>Interviewing</option>
              <option value={'negotiating'}>Negotiating</option>
              <option value={'accepted'}>Accepted</option>
              <option value={'declined'}>Declined</option>
              <option value={'rejected'}>Rejected</option>
              <option value={'archived'}>Archived</option>
            </Form.Select>
          </Form.Group>

          <Form.Group>
            <Form.Label>Location :</Form.Label>
            <Form.Control
              type='text'
              name='jobLocation'
              placeholder='Enter location'
              value={jobLocation}
              required
              onChange={(e) => setJobLocation(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Job Post Url :</Form.Label>
            <Form.Control
              type='text'
              name='jobUrl'
              placeholder='Enter url to job listing'
              value={jobUrl}
              onChange={(e) => setJobUrl(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Min Salary :</Form.Label>
            <Form.Control
              type='text'
              name='minSalary'
              placeholder='Enter a min salary'
              value={minSalary}
              onChange={(e) => setMinSalary(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Max Salary :</Form.Label>
            <Form.Control
              type='text'
              name='maxSalary'
              placeholder='Enter a max salary'
              value={maxSalary}
              onChange={(e) => setMaxSalary(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant='secondary' onClick={clear}>Cancel</Button>
          <Button variant='primary' type='submit'>Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default AddJobModal;