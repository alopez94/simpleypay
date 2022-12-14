import React from "react";

export default function EventList({events, handleClick}) {

    return(

<div>
        {events.map((event, index)=>(
        <React.Fragment key={event.id}>
       <div key={event.id}>
        <h2> {index + 1} - {event.title} </h2>
        <button onClick={() => handleClick(event.id)}>delete event</button>
       </div> 
       </React.Fragment>
      ))}
</div>

    )}