import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { TutorTimeBackendService } from "../tutor-time-backend.service";
import { Router } from "@angular/router";
import { TutorServiceService } from "../tutor-service.service";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.scss"]
})
export class AddCourseComponent implements OnInit {
  // Here I am binding all the View objects into specific keys and then making a OBJ and sending it to the service that connects to the node server.
  course_name = new FormControl("");
  time_slot = new FormControl("");
  fee = new FormControl("");
  skills = new FormControl("");
  tags = new FormControl("");
  description = new FormControl("");
  constructor(
    private tutorTimeServiceInstance: TutorTimeBackendService,
    private router: Router,
    private tutorS: TutorServiceService
  ) {}
  //https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  makeid(length) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  async addCourse() {
    const emailID = localStorage.getItem("emailID");
    var tutorDetail = await this.tutorS.getTutorInfo(emailID);
    const obj = {
      emailID: emailID,
      courseID: this.makeid(5),
      courseName: this.course_name.value,
      timeSlot: this.time_slot.value,
      skills: this.skills.value,
      fee: this.fee.value + "$",
      description: this.description.value,
      currentTime: formatDate(new Date(), "yyyy/MM/dd", "en"),
      city: tutorDetail["tutor"].tutorCity,
      name: tutorDetail["tutor"].fullName,
      count: "0"
    };
    var response = await this.tutorTimeServiceInstance.addCourse(obj);
    if (response) {
      this.router.navigate(["/tutorDashboard"]);
    }
    return obj;
  }
  ngOnInit() {}
}
