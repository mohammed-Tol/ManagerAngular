import { Component } from '@angular/core';
import { EnquiryDisplay } from '../models/enquiry-display';
import { ManagerServiceService } from '../services/manager-service.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrl: './manager-home.component.css'
})
export class ManagerHomeComponent {
  enquiriesPending: EnquiryDisplay[] = [];
  enquiriesApproved: EnquiryDisplay[] = [];
  enquiriesRejected: EnquiryDisplay[] = [];
  id:number=0;
  constructor(
    private managerService: ManagerServiceService,
    private currentRoute:ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.currentRoute.snapshot.params["id"];
    this.fetchEnquiries(this.id);
  }

  fetchEnquiries(id:number)
  {
    this.managerService.getPendingList(2)
      .subscribe(enquiries => {
        this.enquiriesPending = enquiries
      })
    this.managerService.getApprovedList(2)
      .subscribe(enquiries => {
        this.enquiriesApproved = enquiries
      })
    this.managerService.getRejectedList(2)
      .subscribe(enquiries => {
        this.enquiriesRejected = enquiries
      })
  }
}
