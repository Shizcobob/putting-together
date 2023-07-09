import logo from './logo.svg';
import './App.css';
import './project_styles.css';
import PersonCard from './components/PersonCard';

function App() {

  return(
  <>
  <PersonCard first_name="Jane" last_name="Doe" age={45} hair_color="Black"/>
  <PersonCard first_name="John" last_name="Smith" age={88} hair_color="Brown" />
  <PersonCard first_name="Millard" last_name="Fillmore" age={50} hair_color="Brown" />
  <PersonCard first_name="Maria" last_name="Smith" age={62} hair_color="Brown" />
  
  </>
  );
  
}

export default App;
