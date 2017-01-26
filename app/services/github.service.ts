import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id: string = 'e587bfac332d834cba49';
    private client_secret: string = '5bedb1b19b851bd27b05b63804f3281d81b47361';

    constructor(private _http: Http) {
        console.log('service ready');
        this.username = 'ayofish';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json());
    }
}
