import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  Input,
  EventEmitter
} from "@angular/core";

@Component({
  selector: "app-counter",
  templateUrl: "counter.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent implements OnInit {
  @Input() total: number;
  @Output() increment = new EventEmitter();
  @Output() decrement = new EventEmitter();
  @Output() reset = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
