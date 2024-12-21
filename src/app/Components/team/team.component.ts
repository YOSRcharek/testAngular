import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Team } from 'src/app/Models/team';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit{
  @Input() data!:Team;
  @Output() dataEmitter =new EventEmitter();
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
  }
  Details() {
    this.dataEmitter.emit(this.data.id)
  }
}
