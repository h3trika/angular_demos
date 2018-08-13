﻿import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';

import { jqxExpanderComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxexpander.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
    @ViewChild('myExpander') myExpander; jqxExpanderComponent;

    constructor(private http: Http) { }

    ngAfterViewInit(): void {
        this.http.get('../assets/jqxexpanderxmldata.txt')
            .subscribe(data => this.populateExpader(data));
    }

    populateExpader(data) {
        let content = document.createElement('div');
        content.innerHTML = data.text();

        let LIArray = content.getElementsByTagName('li');
        let container = document.createElement('div');
        let ul = document.createElement('ul');

        for (let i = 0; i < LIArray.length; i++) {
            let li = document.createElement('li');
            li.innerText = LIArray[i].innerHTML;
            ul.appendChild(li)
        }

        container.appendChild(ul);

        this.myExpander.setContent(container);
        this.myExpander.setHeaderContent(content.getElementsByTagName('header')[0].innerHTML);
    }
}