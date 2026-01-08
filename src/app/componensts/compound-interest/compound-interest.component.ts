import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-compound-interest',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './compound-interest.component.html',
  styleUrl: './compound-interest.component.css'
})
export class CompoundInterestComponent {
  interestForm!: FormGroup;
  result: number | null = null;
  principal:number | null = null;
  rate:number | null = null;
  time:number | null = null;
  constructor(private fb: FormBuilder) {
    this.interestForm = this.fb.group({
      principal: ['',[Validators.required, Validators.min(0)]],
      rate: ['',[Validators.required, Validators.min(0), Validators.max(100)]],
      time: ['',[Validators.required, Validators.min(0)]]
    });
  }
  onCalculate(){
    if(this.interestForm.invalid){
      return ;
    }
    //const {principal, rate, time } = this.interestForm.value;
    this.principal = this.interestForm.get('principal')?.value;
    this.rate = this.interestForm.get('rate')?.value;
    this.time = this.interestForm.get('time')?.value;
    this.result = this.principal! * Math.pow(1 + this.rate! / 100, this.time!) - this.principal!;
  }
  onReset(){
    this.interestForm.reset();
    this.result = null;
  }
}
