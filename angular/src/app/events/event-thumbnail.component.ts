import { Component, Input, Output , EventEmitter} from '@angular/core';


@Component({
    selector:'event-thumb',
    template:`
    <div class="well hoverwell thumbnail" [routerLink]="['/events',event.id]">
    <h2>{{event.name}}</h2>
    <div>Date: {{event.date}} </div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
    <div>
        <span>Location: {{event.location.address}}</span>
        <span>&nbsp;</span>
        <span>{{event.location.city}}, {{event.location.country}}</span>   
        </div>
       
</div>
    `,
    styles:[`
        .thumbnail {min-height:210px; }

    `]
})

export class EventThumbnailComponent {

    @Input() event: any
    
    

}