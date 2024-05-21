import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Enquiry } from '../models/enquiry';
import { ManagerServiceService } from '../services/manager-service.service';

@Component({
  selector: 'app-manager-view-enquiry',
  templateUrl: './manager-view-enquiry.component.html',
  styleUrl: './manager-view-enquiry.component.css'
})
export class ManagerViewEnquiryComponent implements OnInit{
  id:number=0;
  isPending:boolean = false;
  needsCheque:string="No";
  EnquiryDetais:Enquiry = <Enquiry>{};
  isPopupVisible: boolean = false;

  constructor(
    public apiservices:ManagerServiceService,
    private currentRoute:ActivatedRoute,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.id = this.currentRoute.snapshot.params["id"];
    console.log(this.id)
    this.apiservices.getEnquiryDetails(this.id).subscribe(
      (data)=>{
        if(data.status=='2'){
          this.isPending=true;
        }
        if(data.wantsCheque==true){
          this.needsCheque="Yes"
        }
        if(data.accountType=='1'){
          data.accountType="Savings"
        }else{
          data.accountType="Current"
        }
        this.EnquiryDetais=data;
        this.EnquiryDetais.photo="data:image/jpeg;base64,"+data.photo
        this.EnquiryDetais.aadhaar="data:image/jpeg;base64,"+data.aadhaar
        this.EnquiryDetais.panCard="data:image/jpeg;base64,"+data.panCard
        console.log(this.EnquiryDetais.aadhaar)
      }   
    )
  }

  onApprove():void{
    console.log("Approve button pressed");
    this.apiservices.approveEnquiry(this.id).subscribe(
      (Res)=>{
        console.log('api working');
        ManagerViewEnquiryComponent;
      }
    );
    this.router.navigate(['/manager'])
  }
  onReject():void{
    this.isPopupVisible = true;
  }
  ResetPopup(){
    this.isPopupVisible = false;
  }
  closePopup(data: any) {
    this.isPopupVisible = false;
    // Handle data passed back from the popup if needed
    this.apiservices.rejectEnquiry(this.id,data).subscribe(
      (res)=>{
        ManagerViewEnquiryComponent;
      }
    )
    this.router.navigate(['/manager'])
  }

}
