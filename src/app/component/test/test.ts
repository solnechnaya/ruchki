import {Component, Input, OnInit} from '@angular/core';
import {Model} from "../../model/model";
import {HelloService} from "../../service/hello";


@Component({
    selector: 'test',
    templateUrl: './test.html'
})
export class TestComponent implements OnInit {
    @Input() val: Model;
    private model: Model;
    private title: string;

    constructor(
        private helloService: HelloService
    ) {}

    ngOnInit(): void {
        console.log("init Test");
        this.val = new Model();
        this.val.value = '';
        this.getName();
    }

    getName(): void {
       this.helloService.getName().subscribe(m => {
               this.model = m;
               this.title = m.value;
           }
       );
    }

    save(): void {
        this.helloService.testPost(this.val)
            .subscribe(() => console.log('ok'));
    }
}