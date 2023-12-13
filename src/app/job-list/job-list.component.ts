import { Component } from '@angular/core';
import { jobs } from '../data';
import { IJob } from '../interface/job.interface';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent {
    public list: Array<IJob> = jobs;
}
