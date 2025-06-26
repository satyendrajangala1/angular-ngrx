import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../../projects/store-lib/src/lib/store/counter.actions';
import { AsyncPipe } from '@angular/common';
import { selectDoubleCounter } from '../../projects/store-lib/src/lib/store/counter.selectors';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AsyncPipe],

  providers: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-ngrx-store-example';
  doubleCounter$: Observable<number>;
  counter$: Observable<number>;
constructor(private store: Store<{ counter: number }>) {
  this.doubleCounter$ = this.store.select(selectDoubleCounter);
this.counter$ = store.select('counter');
}
onIncrement() {
this.store.dispatch(increment());
}
onDecrement() {
this.store.dispatch(decrement());
}
onReset() {
this.store.dispatch(reset());
}

}
