import MeetupDetail from '../../components/meetups/MeetupDetail';
import {
  getStaticProps
} from './../../.next/static/webpack/pages/index.13997c1517533176.hot-update';

function MeetupDetails(props) {
  return ( < MeetupDetail />
  );
}

export const getStaticProps = async () => {
  //fetch data for a single meetup

  return {
    props: {
      meetupData: {
        image = 'http://www.rooftoprestaurants.com/Images/Images/US-San-Diego-Hard-Rock.jpg',
        title = 'A First Meetup',
        address = 'Some where in Street 5, 1234, Some City',
        description = 'The Meetup Description',
        id : 'm1'
      }
    }
  }
}

export default MeetupDetails;