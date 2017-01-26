import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.component.html'
})
export class NavbarComponent {
    private brand: string;

    constructor() {
        this.brand = 'github profile search';
    }
}
