import { Component, OnInit } from '@angular/core';
import { CommonWords } from '../../assets/commonwords';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataserviceService } from '../dataservice.service';
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
questionForm :FormGroup;
submitted = false;
questioninfo ={};
questions:any;
replytext ='';
replyid :any;
replyinfo : any;
  constructor(private formBuilder: FormBuilder,private ds:DataserviceService,private common:CommonWords) { }

  ngOnInit(): void {
    this.questionForm = this.formBuilder.group({
      questiontitle: ['', Validators.required],
      questionsummary: ['', Validators.required]});
  this.getquestions();
    }
  get f() { return this.questionForm.controls; }
  onReset() {
    this.submitted = false;
    this.questionForm.reset();
}

onSubmit(questionForm) {
  this.submitted = true;
  let starray = questionForm.value.questionsummary.split(" ")
  let notstarray = [];
  starray.forEach( x => { if(this.common.commonwords.indexOf(x) === -1){
    notstarray.push(x);
  }
});
this.questioninfo = {questionTitle:questionForm.value.questiontitle,questionSummary:questionForm.value.questionsummary,questionPostedby:"Admin",questionKeywords:notstarray.toString()}
  console.log(this.questioninfo)
  this.ds.insertQuestion(this.questioninfo).subscribe((res)=>{
    this.getquestions();
  });
}
  getquestions()
  {
this.ds.Getquestions().subscribe((res)=>{
  this.questions = res.questionList;
});
  }
  sendqid(id){
    this.replyid = id;
  }
  sendreply(text){  
    if(text!== ''){
      this.replyinfo ={ questionReplySummary:text,
        questionReplydby:"User", 
        questionId:this.replyid
      }
      this.ds.replyforquestion(this.replyinfo).subscribe((rr)=>{
        console.log(rr);
        this.getquestions();
      })
    }
  }
  changehelpful(rep){
    this.ds.replyhelpfulchange(rep.id,rep).subscribe((resp)=>{
      console.log(resp);      
      this.getquestions();
    });
  }
}
