import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, LOCALE_ID, Inject } from '@angular/core';
import { FormBuilder, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name: string;

  readonly language: AbstractControl;

  constructor(fb: FormBuilder, @Inject(LOCALE_ID) locale: string, httpClient: HttpClient) {
    this.language = fb.control(locale);
    this.language.valueChanges.subscribe(v => {
      httpClient.post('/api/language', {value: v}).subscribe(() => {
        location.reload();
      });
    });
  }

  ngOnInit(): void {
  }

}
