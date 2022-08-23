import './App.css'
import {useState} from 'react'
import Title from './components/Title'
import Modal from './components/Modal'
import EventList from './components/EventList'
function App() {


  const [showModal, setShowModal] = useState(false)
   const [showEvent, setShowEvent] = useState(true)
  const [events, setEvents] = useState([
    {title: "Mario's birthday bash", id: 1},
    {title: "Browsers's live stream", id: 2},
    {title: "Race on moo moo farm", id: 3}
  ]) 

  const handleClick = (id) => {  
        setEvents((prevEvents) => {
          return prevEvents.filter((event) => {
            return id !== event.id
          })

        })    
        console.log('id', id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const subtitle = "All the lastest events in Marioland"
  
  return (
    <div className="App">
      <Title title="events in your area" subtitle={subtitle}/>
      <Title title="2 events in your area" subtitle={subtitle}/>

      <button onClick={openModal} >Show Modal</button>


      {showEvent &&
      <div>
        <button onClick={() => setShowEvent(false)}>Hide Events</button>
      </div>}
      {!showEvent &&
      <div>
        <button onClick={() => setShowEvent(true)}>Show Events</button>
      </div>}

      {showEvent && <EventList events={events} handleClick={handleClick}/>}

      {/*<Modal>
              <h2>10% off coupon code</h2>
              <p>use Ninja10 at the checkout!</p>
      </Modal> */}
      {showModal && <Modal handleClose={handleClose}>
      <h2>Terms and conditions</h2>
      <p>Lrem jsdfgl;jkfbg; dfjg;nfdg</p>

      </Modal>}

    </div>
  );
}

export default App;
