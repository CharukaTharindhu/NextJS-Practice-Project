import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'http://www.rooftoprestaurants.com/Images/Images/US-San-Diego-Hard-Rock.jpg',
    address: 'Some address 3, 1345, Some city',
    description: 'This is first meetup',
  },
  {
    id: 'm1',
    title: 'A Second Meetup',
    image:
      'https://www.sandiego.org/-/media/images/sdta-site/campaigns/sunny-7/rooftops/born-and-rasied-727x545.jpg?h=545&la=en&w=727',
    address: 'Some address 3, 1345, Some city',
    description: 'This is Second meetup',
  },
  {
    id: 'm1',
    title: 'A Third Meetup',
    image:
      'http://d6vrtzdlbankn.cloudfront.net/wp-content/uploads/2017/04/Lovage4.jpg',
    address: 'Some address 3, 1345, Some city',
    description: 'This is Third meetup',
  },
];

function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

// export const getSeverSideProps = async (context) => {
//   const req = context.req;
//   const res = context.res;

//   //fetch data from an API

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// };

export const getStaticProps = async () => {
  //fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 1,
  };
};

export default HomePage;
