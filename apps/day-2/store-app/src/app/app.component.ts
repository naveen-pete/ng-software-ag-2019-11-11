import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `
  //   <h3>App component template</h3>
  //   <p>Demonstrates inline template</p>
  // `,
  styleUrls: ['./app.component.css']
  // styles: [
  //   `
  //    h3 {
  //      color: red;
  //    }

  //    p {
  //     color: green;
  //   }
  //   `
  // ]
})
export class AppComponent {
  productName: string = 'iPhone X';
  productPrice: number = 60000;

  onSubmit() {
    console.log('Product information submitted!');
  }

  onKeydown(e) {
    console.log('Key pressed:', e.key);
    console.log(e.target.value);
  }
}
