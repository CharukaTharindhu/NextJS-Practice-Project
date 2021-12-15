import NewMeetupForm from './../../components/meetups/NewMeetupForm';

function index() {
  const addMeetupHandler = (enteredMeetUpDate) => {
    console.log('enteredMeetUpDate', enteredMeetUpDate);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}

export default index;
