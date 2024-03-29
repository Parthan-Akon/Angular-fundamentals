import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
selector:'event-list',
template:`
<div>
    <h1>Upcoming Angular Events</h1>
    <hr>
        <div class="row">
            <div  *ngFor="let event of events" class="col-md-5">     
                <event-thumb [event]="event"  ></event-thumb>
            </div>
        </div>

    </div>
`

})

export class EventsListComponent implements OnInit{
  
  events: any
  constructor(private eventService: EventService){

  }

  ngOnInit(){

    this.eventService.getEvents().subscribe(events => {this.events = events});
  }
}